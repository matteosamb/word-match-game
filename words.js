// Prompt words organized by theme
// Each word has: word, position (before/after), hint

const themes = {
  all: {
    name: "All Words",
    words: [] // Will be populated with all words
  },

  easy: {
    name: "Easy Mode",
    words: [
      // Foods - super common
      { word: "hot", position: "before", hint: "food" },        // dog
      { word: "ice", position: "before", hint: "dessert" },     // cream
      { word: "cup", position: "before", hint: "dessert" },     // cake
      { word: "pan", position: "before", hint: "breakfast" },   // cake
      { word: "cheese", position: "before", hint: "food" },     // burger
      { word: "french", position: "before", hint: "food" },     // fries
      { word: "apple", position: "before", hint: "dessert" },   // pie
      { word: "peanut", position: "before", hint: "spread" },   // butter
      { word: "pop", position: "before", hint: "snack" },       // corn
      { word: "milk", position: "before", hint: "drink" },      // shake

      // Nature - obvious
      { word: "sun", position: "before", hint: "plant" },       // flower
      { word: "rain", position: "before", hint: "weather" },    // bow
      { word: "water", position: "before", hint: "nature" },    // fall
      { word: "snow", position: "before", hint: "winter" },     // man, ball, flake
      { word: "sand", position: "before", hint: "beach" },      // castle
      { word: "star", position: "before", hint: "sea creature" }, // fish
      { word: "moon", position: "before", hint: "brightness" }, // light
      { word: "fire", position: "before", hint: "vehicle" },    // truck

      // Body - common
      { word: "tooth", position: "before", hint: "bathroom" },  // brush, paste
      { word: "head", position: "before", hint: "pain" },       // ache
      { word: "eye", position: "before", hint: "body part" },   // ball, brow
      { word: "hair", position: "before", hint: "salon" },      // cut
      { word: "finger", position: "before", hint: "hand" },     // print, nail
      { word: "lip", position: "before", hint: "makeup" },      // stick

      // Sports - everyone knows these
      { word: "foot", position: "before", hint: "sport" },      // ball
      { word: "basket", position: "before", hint: "sport" },    // ball
      { word: "base", position: "before", hint: "sport" },      // ball
      { word: "volley", position: "before", hint: "sport" },    // ball
      { word: "golf", position: "before", hint: "sport item" }, // ball, club

      // Tech - modern life
      { word: "smart", position: "before", hint: "device" },    // phone
      { word: "key", position: "before", hint: "typing" },      // board
      { word: "lap", position: "before", hint: "computer" },    // top
      { word: "web", position: "before", hint: "internet" },    // site
      { word: "pass", position: "before", hint: "security" },   // word

      // Home - everyday
      { word: "door", position: "before", hint: "entrance" },   // bell, knob
      { word: "bed", position: "before", hint: "furniture" },   // room
      { word: "bath", position: "before", hint: "house" },      // room, tub
      { word: "book", position: "before", hint: "reading" },    // shelf, mark
      { word: "dish", position: "before", hint: "kitchen" },    // washer

      // Common compounds
      { word: "birth", position: "before", hint: "celebration" }, // day
      { word: "air", position: "before", hint: "travel" },      // plane, port
      { word: "high", position: "before", hint: "road" },       // way
      { word: "home", position: "before", hint: "assignment" }, // work
      { word: "back", position: "before", hint: "bag" },        // pack
      { word: "super", position: "before", hint: "hero" },      // man
      { word: "bat", position: "before", hint: "hero" },        // man
      { word: "spider", position: "before", hint: "hero" },     // man

      // After position - common ones
      { word: "ball", position: "after", hint: "sport" },       // foot, basket, base
      { word: "room", position: "after", hint: "house" },       // bed, bath, living
      { word: "light", position: "after", hint: "sky" },        // sun, moon, star
      { word: "cake", position: "after", hint: "food" },        // cup, pan, cheese
      { word: "berry", position: "after", hint: "fruit" },      // straw, blue, black
      { word: "book", position: "after", hint: "school" },      // text, note, face
      { word: "phone", position: "after", hint: "device" },     // smart, cell, head
      { word: "day", position: "after", hint: "time" },         // birth, to, sun
      { word: "man", position: "after", hint: "person/hero" },  // super, bat, spider
      { word: "dog", position: "after", hint: "food" },         // hot
    ]
  },

  food: {
    name: "Food & Drinks",
    words: [
      { word: "hot", position: "before", hint: "food" },
      { word: "ice", position: "before", hint: "dessert" },
      { word: "peanut", position: "before", hint: "spread" },
      { word: "cheese", position: "before", hint: "food" },
      { word: "french", position: "before", hint: "side dish" },
      { word: "pop", position: "before", hint: "snack" },
      { word: "cup", position: "before", hint: "dessert" },
      { word: "pan", position: "before", hint: "breakfast" },
      { word: "apple", position: "before", hint: "dessert" },
      { word: "jelly", position: "before", hint: "candy" },
      { word: "candy", position: "before", hint: "sweet" },
      { word: "honey", position: "before", hint: "insect" },
      { word: "butter", position: "before", hint: "insect" },
      { word: "ginger", position: "before", hint: "holiday food" },
      { word: "chocolate", position: "before", hint: "cookie part" },
      { word: "banana", position: "before", hint: "dessert" },
      { word: "straw", position: "before", hint: "fruit" },
      { word: "blue", position: "before", hint: "fruit" },
      { word: "black", position: "before", hint: "fruit" },
      { word: "grape", position: "before", hint: "citrus" },
      { word: "lemon", position: "before", hint: "drink" },
      { word: "cherry", position: "before", hint: "dessert" },
      { word: "meat", position: "before", hint: "italian food" },
      { word: "ham", position: "before", hint: "sandwich" },
      { word: "egg", position: "before", hint: "breakfast" },
      { word: "milk", position: "before", hint: "drink" },
      { word: "corn", position: "before", hint: "fair food" },
      { word: "potato", position: "before", hint: "snack" },
      { word: "coffee", position: "before", hint: "container" },
      { word: "tea", position: "before", hint: "container" },
      { word: "water", position: "before", hint: "fruit" },
      { word: "cook", position: "before", hint: "sweet treat" },
      { word: "cheese", position: "before", hint: "dessert" },
      { word: "cream", position: "before", hint: "dairy" },
      { word: "sour", position: "before", hint: "bread" },
      { word: "cinnamon", position: "before", hint: "pastry" },
      { word: "pizza", position: "before", hint: "container" },
      // After position
      { word: "cake", position: "after", hint: "dessert" },
      { word: "pie", position: "after", hint: "fruit" },
      { word: "cream", position: "after", hint: "frozen treat" },
      { word: "shake", position: "after", hint: "drink" },
      { word: "dog", position: "after", hint: "food" },
      { word: "burger", position: "after", hint: "meat" },
      { word: "fries", position: "after", hint: "nationality" },
      { word: "corn", position: "after", hint: "snack" },
      { word: "bread", position: "after", hint: "grain" },
      { word: "butter", position: "after", hint: "nut" },
    ]
  },

  animals: {
    name: "Animals",
    words: [
      { word: "dog", position: "before", hint: "building" },
      { word: "cat", position: "before", hint: "sea creature" },
      { word: "bird", position: "before", hint: "building" },
      { word: "fish", position: "before", hint: "container" },
      { word: "horse", position: "before", hint: "footwear" },
      { word: "butter", position: "before", hint: "insect" },
      { word: "dragon", position: "before", hint: "insect" },
      { word: "lady", position: "before", hint: "insect" },
      { word: "spider", position: "before", hint: "superhero" },
      { word: "honey", position: "before", hint: "insect" },
      { word: "bull", position: "before", hint: "animal" },
      { word: "cow", position: "before", hint: "western" },
      { word: "pig", position: "before", hint: "body part" },
      { word: "gold", position: "before", hint: "pet" },
      { word: "jelly", position: "before", hint: "sea creature" },
      { word: "star", position: "before", hint: "sea creature" },
      { word: "sea", position: "before", hint: "animal" },
      { word: "ant", position: "before", hint: "insect home" },
      { word: "bee", position: "before", hint: "insect home" },
      { word: "lion", position: "before", hint: "royalty" },
      { word: "tiger", position: "before", hint: "body part" },
      { word: "polar", position: "before", hint: "animal" },
      { word: "teddy", position: "before", hint: "animal" },
      { word: "monkey", position: "before", hint: "playground" },
      { word: "chicken", position: "before", hint: "sickness" },
      { word: "duck", position: "before", hint: "tape brand" },
      { word: "goose", position: "before", hint: "skin reaction" },
      { word: "wolf", position: "before", hint: "group" },
      { word: "fox", position: "before", hint: "dance" },
      { word: "bear", position: "before", hint: "greeting" },
      { word: "rattle", position: "before", hint: "animal" },
      { word: "king", position: "before", hint: "snake" },
      // After position
      { word: "fly", position: "after", hint: "insect" },
      { word: "fish", position: "after", hint: "color/metal" },
      { word: "dog", position: "after", hint: "food temp" },
      { word: "bird", position: "after", hint: "color" },
      { word: "bee", position: "after", hint: "sweet" },
      { word: "bug", position: "after", hint: "female title" },
      { word: "horse", position: "after", hint: "ocean" },
    ]
  },

  nature: {
    name: "Nature",
    words: [
      { word: "sun", position: "before", hint: "plant" },
      { word: "moon", position: "before", hint: "brightness" },
      { word: "star", position: "before", hint: "brightness" },
      { word: "rain", position: "before", hint: "colorful arc" },
      { word: "snow", position: "before", hint: "winter figure" },
      { word: "thunder", position: "before", hint: "weather" },
      { word: "water", position: "before", hint: "nature" },
      { word: "fire", position: "before", hint: "insect" },
      { word: "earth", position: "before", hint: "disaster" },
      { word: "sand", position: "before", hint: "beach structure" },
      { word: "wind", position: "before", hint: "building" },
      { word: "grass", position: "before", hint: "insect" },
      { word: "tree", position: "before", hint: "building" },
      { word: "flower", position: "before", hint: "garden" },
      { word: "sun", position: "before", hint: "eyewear" },
      { word: "rain", position: "before", hint: "clothing" },
      { word: "thunder", position: "before", hint: "bird" },
      { word: "water", position: "before", hint: "fruit" },
      { word: "fire", position: "before", hint: "vehicle" },
      { word: "snow", position: "before", hint: "winter activity" },
      { word: "mountain", position: "before", hint: "location" },
      { word: "river", position: "before", hint: "edge" },
      { word: "lake", position: "before", hint: "location" },
      { word: "beach", position: "before", hint: "sport item" },
      { word: "forest", position: "before", hint: "emergency" },
      { word: "cave", position: "before", hint: "person" },
      { word: "jungle", position: "before", hint: "playground" },
      // After position
      { word: "fall", position: "after", hint: "nature" },
      { word: "light", position: "after", hint: "sky object" },
      { word: "storm", position: "after", hint: "weather" },
      { word: "bow", position: "after", hint: "weather" },
      { word: "flower", position: "after", hint: "sky object" },
      { word: "shine", position: "after", hint: "sky object" },
      { word: "flake", position: "after", hint: "winter" },
      { word: "quake", position: "after", hint: "planet" },
    ]
  },

  sports: {
    name: "Sports & Games",
    words: [
      { word: "foot", position: "before", hint: "sport" },
      { word: "basket", position: "before", hint: "sport" },
      { word: "base", position: "before", hint: "sport" },
      { word: "soft", position: "before", hint: "sport" },
      { word: "volley", position: "before", hint: "sport" },
      { word: "tennis", position: "before", hint: "sport item" },
      { word: "golf", position: "before", hint: "sport item" },
      { word: "bowl", position: "before", hint: "activity" },
      { word: "skate", position: "before", hint: "equipment" },
      { word: "surf", position: "before", hint: "equipment" },
      { word: "snow", position: "before", hint: "equipment" },
      { word: "kick", position: "before", hint: "game start" },
      { word: "goal", position: "before", hint: "position" },
      { word: "quarter", position: "before", hint: "position" },
      { word: "half", position: "before", hint: "period" },
      { word: "home", position: "before", hint: "baseball" },
      { word: "touch", position: "before", hint: "football score" },
      { word: "slam", position: "before", hint: "basketball move" },
      { word: "free", position: "before", hint: "basketball shot" },
      { word: "game", position: "before", hint: "ending" },
      { word: "team", position: "before", hint: "fellow player" },
      { word: "cheer", position: "before", hint: "person" },
      { word: "locker", position: "before", hint: "place" },
      { word: "dart", position: "before", hint: "game surface" },
      { word: "chess", position: "before", hint: "game surface" },
      { word: "card", position: "before", hint: "activity" },
      { word: "video", position: "before", hint: "activity" },
      { word: "board", position: "before", hint: "activity" },
      // After position
      { word: "ball", position: "after", hint: "sport" },
      { word: "board", position: "after", hint: "activity" },
      { word: "game", position: "after", hint: "type" },
      { word: "run", position: "after", hint: "baseball" },
      { word: "down", position: "after", hint: "football" },
      { word: "back", position: "after", hint: "position" },
      { word: "out", position: "after", hint: "baseball" },
    ]
  },

  tech: {
    name: "Tech & Internet",
    words: [
      { word: "smart", position: "before", hint: "device" },
      { word: "key", position: "before", hint: "computer part" },
      { word: "pass", position: "before", hint: "security" },
      { word: "web", position: "before", hint: "internet" },
      { word: "text", position: "before", hint: "communication" },
      { word: "cell", position: "before", hint: "device" },
      { word: "lap", position: "before", hint: "computer" },
      { word: "touch", position: "before", hint: "display" },
      { word: "screen", position: "before", hint: "image capture" },
      { word: "hard", position: "before", hint: "computer part" },
      { word: "soft", position: "before", hint: "computer" },
      { word: "net", position: "before", hint: "streaming" },
      { word: "face", position: "before", hint: "social media" },
      { word: "you", position: "before", hint: "video site" },
      { word: "snap", position: "before", hint: "social media" },
      { word: "hash", position: "before", hint: "social media" },
      { word: "book", position: "before", hint: "reading" },
      { word: "home", position: "before", hint: "webpage" },
      { word: "search", position: "before", hint: "tool" },
      { word: "down", position: "before", hint: "transfer" },
      { word: "up", position: "before", hint: "transfer" },
      { word: "cloud", position: "before", hint: "data" },
      { word: "email", position: "before", hint: "folder" },
      { word: "spam", position: "before", hint: "protection" },
      { word: "live", position: "before", hint: "video" },
      { word: "pod", position: "before", hint: "audio" },
      { word: "blue", position: "before", hint: "wireless" },
      { word: "wifi", position: "before", hint: "security" },
      // After position
      { word: "phone", position: "after", hint: "type" },
      { word: "book", position: "after", hint: "social media" },
      { word: "tube", position: "after", hint: "video site" },
      { word: "top", position: "after", hint: "computer" },
      { word: "board", position: "after", hint: "typing" },
      { word: "word", position: "after", hint: "security" },
      { word: "load", position: "after", hint: "transfer" },
      { word: "stream", position: "after", hint: "video" },
    ]
  },

  movies: {
    name: "Movies & TV",
    words: [
      { word: "star", position: "before", hint: "sci-fi franchise" },
      { word: "spider", position: "before", hint: "superhero" },
      { word: "bat", position: "before", hint: "superhero" },
      { word: "super", position: "before", hint: "superhero" },
      { word: "iron", position: "before", hint: "superhero" },
      { word: "wonder", position: "before", hint: "superhero" },
      { word: "ant", position: "before", hint: "superhero" },
      { word: "aqua", position: "before", hint: "superhero" },
      { word: "cat", position: "before", hint: "superhero" },
      { word: "dead", position: "before", hint: "marvel hero" },
      { word: "black", position: "before", hint: "marvel hero" },
      { word: "toy", position: "before", hint: "pixar movie" },
      { word: "finding", position: "before", hint: "pixar movie" },
      { word: "lion", position: "before", hint: "disney movie" },
      { word: "beauty", position: "before", hint: "disney pair" },
      { word: "sleeping", position: "before", hint: "disney movie" },
      { word: "snow", position: "before", hint: "disney character" },
      { word: "little", position: "before", hint: "disney movie" },
      { word: "jurassic", position: "before", hint: "dinosaur movie" },
      { word: "harry", position: "before", hint: "wizard movie" },
      { word: "hunger", position: "before", hint: "ya movie" },
      { word: "breaking", position: "before", hint: "tv show" },
      { word: "game", position: "before", hint: "hbo show" },
      { word: "stranger", position: "before", hint: "netflix show" },
      { word: "squid", position: "before", hint: "netflix show" },
      { word: "money", position: "before", hint: "netflix show" },
      { word: "orange", position: "before", hint: "netflix show" },
      { word: "house", position: "before", hint: "hbo show" },
      { word: "the", position: "before", hint: "office/simpsons" },
      { word: "friends", position: "before", hint: "sitcom" },
      // After position
      { word: "wars", position: "after", hint: "space" },
      { word: "trek", position: "after", hint: "space" },
      { word: "man", position: "after", hint: "superhero" },
      { word: "woman", position: "after", hint: "superhero" },
      { word: "story", position: "after", hint: "pixar" },
      { word: "king", position: "after", hint: "animal" },
      { word: "park", position: "after", hint: "dinosaurs" },
      { word: "potter", position: "after", hint: "wizard name" },
      { word: "games", position: "after", hint: "survival" },
      { word: "things", position: "after", hint: "netflix" },
    ]
  },

  edm: {
    name: "EDM & Festivals",
    words: [
      // Festivals
      { word: "electric", position: "before", hint: "nyc festival" },
      { word: "ultra", position: "before", hint: "miami festival" },
      { word: "tomorrow", position: "before", hint: "belgium festival" },
      { word: "burning", position: "before", hint: "desert festival" },
      { word: "hard", position: "before", hint: "la festival" },
      { word: "lost", position: "before", hint: "bass festival" },
      { word: "bass", position: "before", hint: "washington festival" },
      { word: "beyond", position: "before", hint: "insomniac event" },
      { word: "escape", position: "before", hint: "halloween event" },
      { word: "nocturnal", position: "before", hint: "insomniac event" },
      { word: "dream", position: "before", hint: "trance event" },
      { word: "sun", position: "before", hint: "florida festival" },

      // DJs
      { word: "dead", position: "before", hint: "dj name" },
      { word: "marsh", position: "before", hint: "dj name" },
      { word: "daft", position: "before", hint: "french duo" },
      { word: "swedish", position: "before", hint: "dj trio" },
      { word: "above", position: "before", hint: "trance duo" },
      { word: "knife", position: "before", hint: "dj duo" },
      { word: "seven", position: "before", hint: "melodic bass dj" },
      { word: "major", position: "before", hint: "diplo project" },
      { word: "porter", position: "before", hint: "dj name" },
      { word: "alison", position: "before", hint: "female dj" },
      { word: "charlotte", position: "before", hint: "techno dj" },
      { word: "chris", position: "before", hint: "tech house dj" },
      { word: "john", position: "before", hint: "tech house dj" },
      { word: "lane", position: "before", hint: "dj number" },
      { word: "eric", position: "before", hint: "swedish dj" },
      { word: "carl", position: "before", hint: "techno legend" },
      { word: "adam", position: "before", hint: "drumcode dj" },

      // Genres & terms
      { word: "deep", position: "before", hint: "genre" },
      { word: "tech", position: "before", hint: "genre" },
      { word: "future", position: "before", hint: "genre" },
      { word: "big", position: "before", hint: "genre" },
      { word: "drum", position: "before", hint: "genre" },
      { word: "beat", position: "before", hint: "moment" },
      { word: "build", position: "before", hint: "before drop" },

      // Venues
      { word: "space", position: "before", hint: "miami club" },
      { word: "brooklyn", position: "before", hint: "nyc venue" },
      { word: "echo", position: "before", hint: "dc club" },
      { word: "sound", position: "before", hint: "la venue" },

      // After position
      { word: "zoo", position: "after", hint: "nyc festival" },
      { word: "land", position: "after", hint: "festival suffix" },
      { word: "lands", position: "after", hint: "bass festival" },
      { word: "mau5", position: "after", hint: "dj name" },
      { word: "mello", position: "after", hint: "dj name" },
      { word: "punk", position: "after", hint: "french duo" },
      { word: "mafia", position: "after", hint: "swedish group" },
      { word: "house", position: "after", hint: "genre" },
      { word: "techno", position: "after", hint: "genre" },
      { word: "bass", position: "after", hint: "genre" },
      { word: "drop", position: "after", hint: "edm moment" },
      { word: "party", position: "after", hint: "event type" },
      { word: "rave", position: "after", hint: "event type" },
      { word: "beyond", position: "after", hint: "trance duo" },
      { word: "lions", position: "after", hint: "dj number" },
      { word: "lazer", position: "after", hint: "diplo project" },
      { word: "robinson", position: "after", hint: "porter ___" },
      { word: "wonderland", position: "after", hint: "female dj" },
      { word: "summit", position: "after", hint: "john ___" },
      { word: "lake", position: "after", hint: "chris ___" },
      { word: "prydz", position: "after", hint: "eric ___" },
      { word: "cox", position: "after", hint: "carl ___" },
    ]
  },

  home: {
    name: "Home & Household",
    words: [
      { word: "bed", position: "before", hint: "room" },
      { word: "bath", position: "before", hint: "room" },
      { word: "living", position: "before", hint: "room" },
      { word: "dining", position: "before", hint: "room" },
      { word: "door", position: "before", hint: "sound maker" },
      { word: "window", position: "before", hint: "glass part" },
      { word: "dish", position: "before", hint: "appliance" },
      { word: "book", position: "before", hint: "furniture" },
      { word: "lamp", position: "before", hint: "cover" },
      { word: "floor", position: "before", hint: "material" },
      { word: "wall", position: "before", hint: "decoration" },
      { word: "tooth", position: "before", hint: "cleaning tool" },
      { word: "hair", position: "before", hint: "styling tool" },
      { word: "coffee", position: "before", hint: "appliance" },
      { word: "fire", position: "before", hint: "home feature" },
      { word: "back", position: "before", hint: "outdoor space" },
      { word: "drive", position: "before", hint: "car space" },
      { word: "front", position: "before", hint: "entrance" },
      { word: "mail", position: "before", hint: "container" },
      { word: "trash", position: "before", hint: "container" },
      { word: "laundry", position: "before", hint: "container" },
      { word: "pillow", position: "before", hint: "cover" },
      { word: "alarm", position: "before", hint: "time" },
      { word: "remote", position: "before", hint: "device" },
      { word: "light", position: "before", hint: "on/off" },
      { word: "power", position: "before", hint: "electricity" },
      { word: "vacuum", position: "before", hint: "appliance" },
      { word: "washing", position: "before", hint: "appliance" },
      // After position
      { word: "room", position: "after", hint: "space type" },
      { word: "door", position: "after", hint: "entrance" },
      { word: "bell", position: "after", hint: "entrance" },
      { word: "brush", position: "after", hint: "cleaning" },
      { word: "case", position: "after", hint: "cover" },
      { word: "board", position: "after", hint: "surface" },
      { word: "paper", position: "after", hint: "decoration" },
      { word: "box", position: "after", hint: "container" },
      { word: "basket", position: "after", hint: "container" },
      { word: "maker", position: "after", hint: "appliance" },
      { word: "washer", position: "after", hint: "appliance" },
    ]
  }
};

// Populate "all" with every word from every theme
const allWords = [];
Object.keys(themes).forEach(key => {
  if (key !== 'all' && themes[key].words) {
    themes[key].words.forEach(word => {
      // Avoid duplicates based on word text + position
      const exists = allWords.some(w => w.word === word.word && w.position === word.position);
      if (!exists) {
        allWords.push(word);
      }
    });
  }
});
themes.all.words = allWords;

module.exports = themes;
