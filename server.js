const express = require('express');
const { createServer } = require('http');
const { Server } = require('socket.io');
const path = require('path');
const themes = require('./words');

const app = express();
const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"]
  }
});

const PORT = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// In-memory game state
const rooms = new Map();

// Generate a random 4-letter room code
function generateRoomCode() {
  const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ'; // Removed I and O to avoid confusion
  let code;
  do {
    code = '';
    for (let i = 0; i < 4; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
  } while (rooms.has(code));
  return code;
}

// Get a random word from the selected theme
function getRandomWord(usedWords, theme = 'all') {
  const words = themes[theme]?.words || themes.all.words;
  const available = words.filter(w => !usedWords.includes(w));
  if (available.length === 0) {
    return words[Math.floor(Math.random() * words.length)];
  }
  return available[Math.floor(Math.random() * available.length)];
}

// Get available themes
function getThemeList() {
  return Object.keys(themes).map(key => ({
    id: key,
    name: themes[key].name,
    wordCount: themes[key].words.length
  }));
}

// Normalize answer for comparison
function normalizeAnswer(answer) {
  return answer.toLowerCase().trim();
}

io.on('connection', (socket) => {
  console.log('Player connected:', socket.id);

  // Create a new room
  socket.on('create-room', (playerName, callback) => {
    const roomCode = generateRoomCode();
    const room = {
      code: roomCode,
      host: socket.id,
      players: new Map(),
      state: 'waiting', // waiting, playing, revealing, finished
      currentRound: 0,
      totalRounds: 5,
      roundTime: 15,
      theme: 'all',
      currentWord: null,
      answers: new Map(),
      usedWords: [],
      roundTimer: null
    };

    room.players.set(socket.id, {
      id: socket.id,
      name: playerName,
      score: 0,
      answered: false
    });

    rooms.set(roomCode, room);
    socket.join(roomCode);
    socket.roomCode = roomCode;

    console.log(`Room ${roomCode} created by ${playerName}`);
    callback({ success: true, roomCode, isHost: true, themes: getThemeList() });
  });

  // Join an existing room
  socket.on('join-room', (data, callback) => {
    const { roomCode, playerName } = data;
    const code = roomCode.toUpperCase();
    const room = rooms.get(code);

    if (!room) {
      callback({ success: false, error: 'Room not found' });
      return;
    }

    if (room.state !== 'waiting') {
      callback({ success: false, error: 'Game already in progress' });
      return;
    }

    room.players.set(socket.id, {
      id: socket.id,
      name: playerName,
      score: 0,
      answered: false
    });

    socket.join(code);
    socket.roomCode = code;

    // Notify all players in the room
    const playerList = Array.from(room.players.values()).map(p => ({
      id: p.id,
      name: p.name,
      score: p.score
    }));

    io.to(code).emit('player-joined', { players: playerList });

    console.log(`${playerName} joined room ${code}`);
    callback({ success: true, roomCode: code, isHost: false, players: playerList, themes: getThemeList() });
  });

  // Start the game
  socket.on('start-game', (settings, callback) => {
    const room = rooms.get(socket.roomCode);

    if (!room) {
      callback({ success: false, error: 'Room not found' });
      return;
    }

    if (room.host !== socket.id) {
      callback({ success: false, error: 'Only the host can start the game' });
      return;
    }

    if (room.players.size < 2) {
      callback({ success: false, error: 'Need at least 2 players' });
      return;
    }

    // Apply settings if provided
    if (settings) {
      if (settings.rounds) room.totalRounds = settings.rounds;
      if (settings.time) room.roundTime = settings.time;
      if (settings.theme) room.theme = settings.theme;
    }

    room.state = 'playing';
    room.currentRound = 0;

    console.log(`Game started in room ${socket.roomCode}`);
    callback({ success: true });

    startNewRound(room);
  });

  // Submit an answer
  socket.on('submit-answer', (answer, callback) => {
    const room = rooms.get(socket.roomCode);

    if (!room || room.state !== 'playing') {
      callback({ success: false });
      return;
    }

    const player = room.players.get(socket.id);
    if (!player || player.answered) {
      callback({ success: false });
      return;
    }

    player.answered = true;
    room.answers.set(socket.id, {
      text: normalizeAnswer(answer),
      time: Date.now(),
      order: room.answers.size + 1
    });

    // Notify others that this player has answered
    io.to(socket.roomCode).emit('player-answered', {
      playerId: socket.id,
      answeredCount: room.answers.size,
      totalPlayers: room.players.size
    });

    callback({ success: true });

    // Check if all players have answered
    if (room.answers.size === room.players.size) {
      clearTimeout(room.roundTimer);
      endRound(room);
    }
  });

  // Restart game (play again)
  socket.on('restart-game', (callback) => {
    const room = rooms.get(socket.roomCode);

    if (!room) {
      callback({ success: false, error: 'Room not found' });
      return;
    }

    if (room.host !== socket.id) {
      callback({ success: false, error: 'Only the host can restart' });
      return;
    }

    // Reset game state
    room.state = 'waiting';
    room.currentRound = 0;
    room.currentWord = null;
    room.answers.clear();
    room.usedWords = [];
    clearTimeout(room.roundTimer);

    // Reset player scores
    for (const player of room.players.values()) {
      player.score = 0;
      player.answered = false;
    }

    const playerList = Array.from(room.players.values()).map(p => ({
      id: p.id,
      name: p.name,
      score: 0
    }));

    io.to(socket.roomCode).emit('game-restarted', { players: playerList });
    callback({ success: true });
  });

  // Handle disconnect
  socket.on('disconnect', () => {
    console.log('Player disconnected:', socket.id);

    if (socket.roomCode) {
      const room = rooms.get(socket.roomCode);
      if (room) {
        room.players.delete(socket.id);

        if (room.players.size === 0) {
          // Clean up empty room
          clearTimeout(room.roundTimer);
          rooms.delete(socket.roomCode);
          console.log(`Room ${socket.roomCode} deleted (empty)`);
        } else {
          // Notify remaining players
          const playerList = Array.from(room.players.values()).map(p => ({
            id: p.id,
            name: p.name,
            score: p.score
          }));

          // If host left, assign new host
          if (room.host === socket.id) {
            room.host = room.players.keys().next().value;
            io.to(room.host).emit('became-host');
          }

          io.to(socket.roomCode).emit('player-left', { players: playerList });
        }
      }
    }
  });
});

function startNewRound(room) {
  room.currentRound++;
  room.answers.clear();
  room.state = 'playing';

  // Reset player answered status
  for (const player of room.players.values()) {
    player.answered = false;
  }

  // Get a new word from selected theme
  room.currentWord = getRandomWord(room.usedWords, room.theme);
  room.usedWords.push(room.currentWord);

  console.log(`Round ${room.currentRound} in room ${room.code}: "${room.currentWord}"`);

  io.to(room.code).emit('new-round', {
    round: room.currentRound,
    totalRounds: room.totalRounds,
    word: room.currentWord,
    time: room.roundTime
  });

  // Set timer for round end
  room.roundTimer = setTimeout(() => {
    endRound(room);
  }, room.roundTime * 1000);
}

function endRound(room) {
  room.state = 'revealing';

  // Calculate scores - players who matched get points
  const answerGroups = new Map();

  // Group players by their answer
  for (const [playerId, answerData] of room.answers.entries()) {
    const text = answerData.text;
    if (!answerGroups.has(text)) {
      answerGroups.set(text, []);
    }
    answerGroups.get(text).push({ playerId, ...answerData });
  }

  // Award points for matches with speed bonus
  const results = [];
  for (const [playerId, answerData] of room.answers.entries()) {
    const player = room.players.get(playerId);
    const group = answerGroups.get(answerData.text);
    const matchCount = group.length;
    let points = 0;
    let speedBonus = 0;

    if (matchCount > 1) {
      // Base points for matching
      points = matchCount * 100;

      // Speed bonus: first person to submit this answer gets bonus
      const sortedGroup = [...group].sort((a, b) => a.time - b.time);
      const position = sortedGroup.findIndex(p => p.playerId === playerId);

      if (position === 0) {
        // First to submit this matching answer
        speedBonus = 50;
      }

      points += speedBonus;
      player.score += points;
    }

    results.push({
      playerId,
      playerName: player.name,
      answer: answerData.text,
      points,
      speedBonus,
      matchCount,
      order: answerData.order
    });
  }

  // Add players who didn't answer
  for (const [playerId, player] of room.players.entries()) {
    if (!room.answers.has(playerId)) {
      results.push({
        playerId,
        playerName: player.name,
        answer: null,
        points: 0,
        matchCount: 0
      });
    }
  }

  // Get current scores
  const scores = Array.from(room.players.values())
    .map(p => ({ id: p.id, name: p.name, score: p.score }))
    .sort((a, b) => b.score - a.score);

  io.to(room.code).emit('round-results', {
    results,
    scores,
    round: room.currentRound,
    totalRounds: room.totalRounds
  });

  // Check if game is over
  if (room.currentRound >= room.totalRounds) {
    setTimeout(() => {
      room.state = 'finished';
      io.to(room.code).emit('game-over', { scores });
    }, 5000);
  } else {
    // Start next round after delay
    setTimeout(() => {
      startNewRound(room);
    }, 5000);
  }
}

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Word Match Game server running on port ${PORT}`);
});
