// Word Match Game - Client

const socket = io();

// Game state
let state = {
  playerName: '',
  roomCode: '',
  isHost: false,
  players: [],
  currentRound: 0,
  totalRounds: 5,
  submitted: false
};

// DOM Elements
const screens = {
  lobby: document.getElementById('lobby-screen'),
  waiting: document.getElementById('waiting-screen'),
  game: document.getElementById('game-screen'),
  results: document.getElementById('results-screen'),
  gameover: document.getElementById('gameover-screen')
};

// Show a specific screen
function showScreen(name) {
  Object.values(screens).forEach(s => s.classList.remove('active'));
  screens[name].classList.add('active');
}

// Lobby Screen
const playerNameInput = document.getElementById('player-name');
const howToPlayBtn = document.getElementById('how-to-play-btn');
const instructions = document.getElementById('instructions');

howToPlayBtn.addEventListener('click', () => {
  instructions.classList.toggle('hidden');
  howToPlayBtn.textContent = instructions.classList.contains('hidden') ? 'How to Play' : 'Hide';
});
const createBtn = document.getElementById('create-btn');
const roomCodeInput = document.getElementById('room-code-input');
const joinBtn = document.getElementById('join-btn');
const lobbyError = document.getElementById('lobby-error');

createBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim();
  if (!name) {
    lobbyError.textContent = 'Please enter your name';
    return;
  }

  state.playerName = name;
  lobbyError.textContent = '';

  socket.emit('create-room', name, (response) => {
    if (response.success) {
      state.roomCode = response.roomCode;
      state.isHost = true;
      state.players = [{ id: socket.id, name: state.playerName, score: 0 }];
      if (response.themes) populateThemes(response.themes);
      enterWaitingRoom();
    } else {
      lobbyError.textContent = response.error || 'Failed to create room';
    }
  });
});

joinBtn.addEventListener('click', () => {
  const name = playerNameInput.value.trim();
  const code = roomCodeInput.value.trim().toUpperCase();

  if (!name) {
    lobbyError.textContent = 'Please enter your name';
    return;
  }
  if (!code || code.length !== 4) {
    lobbyError.textContent = 'Please enter a 4-letter room code';
    return;
  }

  state.playerName = name;
  lobbyError.textContent = '';

  socket.emit('join-room', { roomCode: code, playerName: name }, (response) => {
    if (response.success) {
      state.roomCode = response.roomCode;
      state.isHost = false;
      state.players = response.players;
      if (response.themes) populateThemes(response.themes);
      enterWaitingRoom();
    } else {
      lobbyError.textContent = response.error || 'Failed to join room';
    }
  });
});

// Allow Enter key to submit
playerNameInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter' && roomCodeInput.value.trim()) {
    joinBtn.click();
  } else if (e.key === 'Enter') {
    createBtn.click();
  }
});

roomCodeInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    joinBtn.click();
  }
});

// Waiting Room Screen
const roomCodeDisplay = document.getElementById('room-code-display');
const playerList = document.getElementById('player-list');
const hostControls = document.getElementById('host-controls');
const guestMessage = document.getElementById('guest-message');
const startBtn = document.getElementById('start-btn');
const roundsSelect = document.getElementById('rounds-select');
const timeSelect = document.getElementById('time-select');
const themeSelect = document.getElementById('theme-select');

// Populate theme dropdown
function populateThemes(themes) {
  themeSelect.innerHTML = '';
  themes.forEach(theme => {
    const option = document.createElement('option');
    option.value = theme.id;
    option.textContent = `${theme.name} (${theme.wordCount})`;
    themeSelect.appendChild(option);
  });
}

function enterWaitingRoom() {
  showScreen('waiting');
  roomCodeDisplay.textContent = state.roomCode;
  updatePlayerList();

  if (state.isHost) {
    hostControls.classList.remove('hidden');
    guestMessage.classList.add('hidden');
  } else {
    hostControls.classList.add('hidden');
    guestMessage.classList.remove('hidden');
  }
}

function updatePlayerList() {
  playerList.innerHTML = '';
  state.players.forEach((player, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${player.name}</span>
      ${index === 0 ? '<span class="host-badge">HOST</span>' : ''}
    `;
    playerList.appendChild(li);
  });

  // Enable start button if we have enough players
  startBtn.disabled = state.players.length < 2;
}

startBtn.addEventListener('click', () => {
  const settings = {
    rounds: parseInt(roundsSelect.value),
    time: parseInt(timeSelect.value),
    theme: themeSelect.value
  };

  socket.emit('start-game', settings, (response) => {
    if (!response.success) {
      alert(response.error || 'Failed to start game');
    }
  });
});

// Socket events for waiting room
socket.on('player-joined', (data) => {
  state.players = data.players;
  updatePlayerList();
});

socket.on('player-left', (data) => {
  state.players = data.players;
  updatePlayerList();
});

socket.on('became-host', () => {
  state.isHost = true;
  hostControls.classList.remove('hidden');
  guestMessage.classList.add('hidden');
});

// Game Screen
const currentRoundEl = document.getElementById('current-round');
const totalRoundsEl = document.getElementById('total-rounds');
const timerEl = document.getElementById('timer');
const promptWordEl = document.getElementById('prompt-word');
const answerInput = document.getElementById('answer-input');
const submitBtn = document.getElementById('submit-btn');
const answerStatus = document.getElementById('answer-status');

let timerInterval = null;

socket.on('new-round', (data) => {
  state.currentRound = data.round;
  state.totalRounds = data.totalRounds;
  state.submitted = false;

  showScreen('game');

  currentRoundEl.textContent = data.round;
  totalRoundsEl.textContent = data.totalRounds;
  promptWordEl.textContent = data.word;
  answerInput.value = '';
  answerInput.disabled = false;
  submitBtn.disabled = false;
  answerStatus.textContent = '';
  answerInput.parentElement.classList.remove('submitted');
  document.getElementById('game-screen').classList.remove('waiting');

  // Focus the input
  setTimeout(() => answerInput.focus(), 100);

  // Start timer
  let timeLeft = data.time;
  timerEl.textContent = timeLeft;
  timerEl.className = 'timer';

  clearInterval(timerInterval);
  timerInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = timeLeft;

    if (timeLeft <= 5) {
      timerEl.className = 'timer danger';
    } else if (timeLeft <= 10) {
      timerEl.className = 'timer warning';
    }

    if (timeLeft <= 0) {
      clearInterval(timerInterval);
    }
  }, 1000);
});

submitBtn.addEventListener('click', submitAnswer);
answerInput.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    submitAnswer();
  }
});

function submitAnswer() {
  if (state.submitted) return;

  const answer = answerInput.value.trim();
  if (!answer) return;

  state.submitted = true;
  answerInput.disabled = true;
  submitBtn.disabled = true;
  answerInput.parentElement.classList.add('submitted');
  document.getElementById('game-screen').classList.add('waiting');
  answerStatus.innerHTML = '<span class="waiting-text">Answer locked in! Waiting for others...</span>';

  socket.emit('submit-answer', answer, (response) => {
    if (!response.success) {
      answerStatus.textContent = 'Failed to submit';
    }
  });
}

socket.on('player-answered', (data) => {
  const remaining = data.totalPlayers - data.answeredCount;
  if (state.submitted) {
    if (remaining === 0) {
      answerStatus.innerHTML = '<span class="waiting-text">All in! Revealing answers...</span>';
    } else {
      answerStatus.innerHTML = `<span class="waiting-text">Waiting for ${remaining} more player${remaining > 1 ? 's' : ''}...</span>`;
    }
  } else {
    answerStatus.textContent = `${data.answeredCount}/${data.totalPlayers} players answered`;
  }
});

// Results Screen
const answersList = document.getElementById('answers-list');
const scoresList = document.getElementById('scores-list');
const nextRoundMsg = document.getElementById('next-round-msg');

socket.on('round-results', (data) => {
  clearInterval(timerInterval);
  document.getElementById('game-screen').classList.remove('waiting');
  showScreen('results');

  // Display answers sorted by order submitted
  answersList.innerHTML = '';

  const sortedResults = [...data.results].sort((a, b) => (a.order || 99) - (b.order || 99));

  sortedResults.forEach(result => {
    const div = document.createElement('div');
    div.className = 'answer-item';

    if (!result.answer) {
      div.classList.add('no-answer');
      div.innerHTML = `
        <span class="player-name">${result.playerName}</span>
        <span class="answer">No answer</span>
        <span class="points">+0</span>
      `;
    } else {
      if (result.matchCount > 1) {
        div.classList.add('matched');
      }
      const speedBadge = result.speedBonus ? '<span class="speed-badge">FAST</span>' : '';
      const bonusText = result.speedBonus ? ` <span class="bonus">(+${result.speedBonus} speed)</span>` : '';
      div.innerHTML = `
        <span class="player-name">${result.playerName} ${speedBadge}</span>
        <span class="answer">"${result.answer}"</span>
        <span class="points">+${result.points}${bonusText}</span>
      `;
    }

    answersList.appendChild(div);
  });

  // Display scores
  scoresList.innerHTML = '';
  data.scores.forEach(s => {
    const li = document.createElement('li');
    li.innerHTML = `<span class="name">${s.name}</span><span class="score">${s.score}</span>`;
    scoresList.appendChild(li);
  });

  // Update message
  if (data.round >= data.totalRounds) {
    nextRoundMsg.textContent = 'Final results coming...';
  } else {
    nextRoundMsg.textContent = 'Next round starting...';
  }
});

// Game Over Screen
const winnerDisplay = document.getElementById('winner-display');
const finalScoresList = document.getElementById('final-scores-list');
const playAgainBtn = document.getElementById('play-again-btn');

socket.on('game-over', (data) => {
  showScreen('gameover');

  const topScore = data.scores[0].score;
  const winners = data.scores.filter(p => p.score === topScore);

  if (winners.length > 1) {
    // Tie game
    const names = winners.map(w => w.name).join(' & ');
    winnerDisplay.innerHTML = `
      <span class="trophy">🤝</span>
      It's a tie!<br>${names} with ${topScore} points!
    `;
  } else {
    // Single winner
    winnerDisplay.innerHTML = `
      <span class="trophy">🏆</span>
      ${winners[0].name} wins with ${topScore} points!
    `;
  }

  finalScoresList.innerHTML = '';
  data.scores.forEach((s, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span class="rank">#${index + 1}</span>
      <span class="name">${s.name}</span>
      <span class="score">${s.score}</span>
    `;
    finalScoresList.appendChild(li);
  });
});

playAgainBtn.addEventListener('click', () => {
  if (state.isHost) {
    socket.emit('restart-game', (response) => {
      if (!response.success) {
        alert(response.error || 'Failed to restart');
      }
    });
  } else {
    // Non-hosts see this as "waiting for host"
    playAgainBtn.textContent = 'Waiting for host...';
    playAgainBtn.disabled = true;
  }
});

const leaveBtn = document.getElementById('leave-btn');
leaveBtn.addEventListener('click', () => {
  window.location.reload();
});

// Handle game restart
socket.on('game-restarted', (data) => {
  state.players = data.players;
  state.currentRound = 0;
  playAgainBtn.textContent = 'Play Again';
  playAgainBtn.disabled = false;
  enterWaitingRoom();
});

// Handle disconnection
socket.on('disconnect', () => {
  alert('Disconnected from server. Please refresh the page.');
});

// Prevent accidental page close during game
window.addEventListener('beforeunload', (e) => {
  if (state.roomCode && screens.game.classList.contains('active')) {
    e.preventDefault();
    e.returnValue = '';
  }
});
