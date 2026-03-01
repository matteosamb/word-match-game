// Prompt words organized by theme

const themes = {
  all: {
    name: "All Words",
    words: [] // Will be populated with all words
  },

  food: {
    name: "Food & Drinks",
    words: [
      "hot",       // dog, sauce, tub
      "ice",       // cream, cube, berg
      "peanut",    // butter
      "cheese",    // burger, cake, ball
      "french",    // fries, toast
      "pop",       // corn, sicle
      "cup",       // cake
      "pan",       // cake
      "apple",     // pie, sauce, juice
      "jelly",     // bean, roll
      "candy",     // bar, cane, corn
      "honey",     // bee, moon, dew
      "butter",    // fly, cup, milk, scotch
      "ginger",    // bread, snap
      "pepper",    // mint, oni
      "chocolate", // chip, cake, milk
      "banana",    // split, bread
      "straw",     // berry
      "blue",      // berry
      "black",     // berry
      "grape",     // fruit, vine
      "lemon",     // ade, drop
      "orange",    // juice
      "cherry",    // pie, bomb
      "peach",     // cobbler, fuzz
      "meat",      // ball, loaf
      "ham",       // burger, ster
      "egg",       // shell, nog, plant
      "milk",      // shake, weed
      "sugar",     // cane, plum
      "salt",      // water, shaker
      "corn",      // dog, bread
      "potato",    // chip, salad
      "tomato",    // sauce, soup
      "pizza",     // hut
      "taco",      // bell
      "chili",     // dog, pepper
      "coffee",    // cup, table, bean
      "tea",       // cup, pot, bag
      "soda",      // pop
      "water",     // melon, bottle
      "fish",      // stick, bowl
      "chicken",   // nugget, wing
      "beef",      // steak, jerky
      "pork",      // chop
      "bacon",     // strip
      "sausage",   // link
      "bread",     // crumb, stick
      "toast",     // er
      "waffle",    // cone, iron
      "syrup",     // maple
      "cream",     // cheese, puff
      "whip",      // cream
      "sour",      // cream, dough
      "sweet",     // potato, heart
      "spice",     // cake, girls
      "cinnamon",  // roll
      "vanilla",   // bean, ice
      "caramel",   // apple
      "fudge",     // brownie
      "brownie",   // point
      "cookie",    // dough, cutter
      "cake",      // walk, pop
      "pie",       // chart
      "donut",     // hole
      "pretzel",   // stick
      "nacho",     // cheese
      "salsa",     // dance
      "guac",      // amole
    ]
  },

  animals: {
    name: "Animals",
    words: [
      "dog",       // house, food
      "cat",       // fish, walk, nap
      "bird",      // house, bath, cage
      "fish",      // bowl, tank
      "horse",     // shoe, back, power
      "butter",    // fly
      "dragon",    // fly, fruit
      "lady",      // bug
      "spider",    // man, web
      "bumble",    // bee
      "honey",     // bee
      "bull",      // dog, frog
      "cow",       // boy, girl
      "pig",       // pen, tail
      "chicken",   // pox
      "duck",      // ling, tape
      "goose",     // bump
      "turkey",    // day
      "eagle",     // eye, scout
      "hawk",      // eye
      "dove",      // tail
      "crow",      // bar
      "wolf",      // pack, man
      "fox",       // hole, trot
      "bear",      // hug
      "deer",      // skin
      "rabbit",    // hole, foot
      "mouse",     // trap, pad
      "rat",       // race, trap
      "frog",      // man, leg
      "snake",     // bite, skin, pit
      "shark",     // fin, week, tank
      "whale",     // bone
      "dolphin",   // safe
      "crab",      // cake, walk
      "lobster",   // tail, roll
      "gold",      // fish
      "jelly",     // fish
      "star",      // fish
      "sea",       // horse
      "ant",       // hill, eater
      "bee",       // hive, line
      "wasp",      // nest
      "monkey",    // bar, business
      "gorilla",   // glue
      "lion",      // heart, king
      "tiger",     // eye, lily
      "zebra",     // crossing
      "elephant",  // trunk
      "giraffe",   // neck
      "hippo",     // potamus
      "rhino",     // horn
      "panda",     // bear
      "koala",     // bear
      "kangaroo",  // court
      "penguin",   // walk
      "polar",     // bear
      "grizzly",   // bear
      "black",     // bear, bird
      "rattle",    // snake
      "king",      // cobra, fisher
      "hammer",    // head shark
      "sword",     // fish
      "puffer",    // fish
      "cat",       // fish
      "dog",       // fish
      "blow",      // fish
      "sting",     // ray
      "man",       // ta ray
      "octo",      // pus
      "squid",     // ward
      "clam",      // shell
      "oyster",    // shell
      "snail",     // mail
      "slug",      // gish
      "worm",      // hole
      "inch",      // worm
      "silk",      // worm
      "glow",      // worm
      "fire",      // fly
      "grass",     // hopper
      "cricket",   // bat
      "beetle",    // juice
      "roach",     // coach
      "mosquito",  // bite
      "butter",    // fly
    ]
  },

  nature: {
    name: "Nature",
    words: [
      "sun",       // flower, glasses, shine
      "moon",      // light, shine, walk
      "star",      // light, dust, fish
      "rain",      // bow, coat, drop
      "snow",      // ball, flake, man
      "thunder",   // storm, bolt
      "water",     // fall, melon
      "fire",      // truck, fly
      "earth",     // quake, worm
      "sea",       // shell, horse
      "sand",      // castle, box
      "cloud",     // burst, nine
      "wind",      // mill, shield
      "storm",     // trooper
      "grass",     // hopper, land
      "tree",      // house, top
      "flower",    // pot, bed
      "leaf",      // blower
      "wood",      // pecker, land
      "stone",     // wall, cold
      "rock",      // star, slide
      "mountain",  // top, dew
      "river",     // bank, side
      "lake",      // side, front
      "ocean",     // front
      "beach",     // ball, front
      "island",    // hopping
      "hill",      // side, billy
      "cave",      // man
      "jungle",    // gym, book
      "forest",    // fire, ranger
      "desert",    // storm
      "volcano",   // eruption
      "glacier",   // melt
      "canyon",    // grand
      "valley",    // ball, girl
      "cliff",     // hanger
      "wave",      // length
      "tide",      // pool, pod
      "coral",     // reef
      "spring",    // water, board
      "summer",    // time
      "fall",      // leaves
      "winter",    // storm
      "frost",     // bite
      "ice",       // berg, cap
      "fog",       // horn, gy
      "mist",      // er, y
      "dew",       // drop
      "rainbow",   // trout
      "lightning", // bolt, bug
      "hail",      // storm, stone
      "breeze",    // way
      "gust",      // y
      "tornado",   // alley
      "hurricane", // season
      "flood",     // gate, light
      "drought",   // resistant
      "earth",     // worm, quake
      "mud",       // slide, pie
      "dust",      // pan, bunny
      "pebble",    // beach
      "boulder",   // dash
      "crystal",   // ball, clear
      "gem",       // stone
      "mineral",   // water
      "fossil",    // fuel
      "amber",     // alert
      "coral",     // reef
      "pearl",     // harbor
      "shell",     // fish
      "pine",      // cone, apple
      "oak",       // tree
      "palm",      // tree
      "maple",     // syrup, leaf
      "cherry",    // blossom
      "rose",      // bush, bud
      "daisy",     // chain
      "tulip",     // field
      "violet",    // color
      "lily",      // pad, pond
      "ivy",       // league
      "moss",      // green
      "fern",      // green
      "bamboo",    // shoot
      "cactus",    // flower
      "mushroom",  // cloud
      "acorn",     // squash
      "seed",      // ling
      "root",      // beer, canal
      "branch",    // out
      "twig",      // snap
      "bark",      // ing
      "trunk",     // line
    ]
  },

  sports: {
    name: "Sports & Games",
    words: [
      "foot",      // ball
      "basket",    // ball
      "base",      // ball
      "soft",      // ball
      "volley",    // ball
      "tennis",    // ball, court
      "golf",      // ball, course
      "bowl",      // ing
      "skate",     // board, park
      "surf",      // board
      "snow",      // board
      "ski",       // jump, lift
      "swim",      // suit
      "run",       // way, ner
      "jump",      // shot, rope
      "kick",      // off, ball
      "goal",      // post, keeper
      "quarter",   // back
      "half",      // time, back
      "full",      // back
      "home",      // run, base
      "touch",     // down
      "slam",      // dunk
      "free",      // throw
      "foul",      // play, line
      "game",      // boy, over
      "team",      // mate, work
      "cheer",     // leader
      "champion",  // ship
      "trophy",    // wife
      "medal",     // lion
      "race",      // car, track
      "track",     // field
      "field",     // goal, trip
      "court",     // side
      "ring",      // side, boxing
      "mat",       // wrestling
      "pool",      // side, hall
      "lane",      // bowling
      "pin",       // bowling, ball
      "strike",    // out, zone
      "spare",     // tire
      "gutter",    // ball
      "hole",      // in one
      "birdie",    // putt
      "eagle",     // scout
      "bogey",     // man
      "putt",      // er, ing
      "club",      // house
      "caddy",     // shack
      "tee",       // shirt, time
      "fairway",   // wood
      "bunker",    // sand
      "green",     // jacket
      "net",       // ball
      "racket",    // ball
      "serve",     // ice
      "ace",       // high
      "match",     // point
      "set",       // point
      "love",      // score
      "deuce",     // wild
      "coach",     // potato
      "ref",       // eree
      "ump",       // ire
      "bench",     // press, warm
      "locker",    // room
      "gym",       // class
      "weight",    // lift, room
      "dumb",      // bell
      "barbell",   // curl
      "pull",      // up
      "push",      // up
      "sit",       // up
      "crunch",    // time
      "plank",     // challenge
      "squat",     // rack
      "lunge",     // forward
      "sprint",    // race
      "marathon",  // runner
      "relay",     // race
      "hurdle",    // jump
      "pole",      // vault
      "shot",      // put
      "discus",    // throw
      "javelin",   // throw
      "wrestling", // mat
      "boxing",    // ring
      "karate",    // chop, kid
      "judo",      // throw
      "fencing",   // sword
      "archery",   // target
      "target",    // practice
      "bull",      // eye
      "dart",      // board
      "chess",     // board
      "checker",   // board
      "card",      // game
      "dice",      // roll
      "poker",     // face, chip
      "black",     // jack
      "slot",      // machine
      "pinball",   // machine
      "arcade",    // game
      "video",     // game
      "board",     // game
    ]
  },

  body: {
    name: "Body & Health",
    words: [
      "eye",       // ball, brow, lash
      "head",      // ache, phones
      "heart",     // beat, break
      "hand",      // shake, bag
      "foot",      // ball, print
      "back",      // pack, bone
      "tooth",     // brush, paste
      "finger",    // print, nail
      "hair",      // cut, brush
      "lip",       // stick, gloss
      "arm",       // chair, pit
      "leg",       // room
      "neck",      // lace, tie
      "nose",      // bleed, dive
      "ear",       // ring, drum
      "belly",     // button, ache
      "brain",     // storm, wash
      "blood",     // hound, bath
      "bone",      // head, fire
      "skin",      // care, head
      "face",      // book, mask
      "thumb",     // nail, tack
      "tongue",    // twister
      "chest",     // nut
      "shoulder",  // blade
      "elbow",     // room, grease
      "wrist",     // watch, band
      "knee",      // cap, high
      "ankle",     // bracelet
      "toe",       // nail, jam
      "heel",      // flip
      "palm",      // tree, reader
      "knuckle",   // head, duster
      "rib",       // cage, eye
      "spine",     // chilling
      "skull",     // cap
      "jaw",       // bone, drop
      "cheek",     // bone
      "brow",      // beat
      "chin",      // up, strap
      "throat",    // sore
      "lung",      // fish
      "liver",     // pool
      "kidney",    // bean, stone
      "stomach",   // ache
      "gut",       // feeling
      "muscle",    // car, man
      "nerve",     // wracking
      "vein",      // blood
      "artery",    // main
      "cell",      // phone
      "tissue",    // box, paper
      "organ",     // donor
      "gland",     // swollen
      "joint",     // pain
      "tendon",    // injury
      "ligament",  // tear
      "cartilage", // damage
      "marrow",    // bone
      "plasma",    // tv
      "hormone",   // imbalance
      "enzyme",    // reaction
      "vitamin",   // c, d
      "protein",   // shake, bar
      "calcium",   // supplement
      "iron",      // man
      "zinc",      // oxide
      "fever",     // dream
      "cold",      // sore
      "flu",       // shot
      "cough",     // drop, syrup
      "sneeze",    // guard
      "headache",  // medicine
      "pain",      // killer
      "pill",      // box
      "medicine",  // ball, cabinet
      "band",      // aid
      "cast",      // iron
      "crutch",    // walk
      "wheelchair",// accessible
      "hospital",  // bed, gown
      "doctor",    // note
      "nurse",     // station
      "surgery",   // room
      "therapy",   // session
      "treatment", // plan
      "recovery",  // room
      "check",     // up
      "x",         // ray
      "scan",      // ner
      "test",      // result
      "diagnosis", // medical
      "symptom",   // checker
      "cure",      // all
      "heal",      // ing
    ]
  },

  tech: {
    name: "Tech & Internet",
    words: [
      "smart",     // phone, watch
      "key",       // board, chain
      "pass",      // word, port
      "web",       // site, cam
      "snap",      // chat, shot
      "text",      // book, message
      "cell",      // phone
      "lap",       // top
      "touch",     // screen
      "screen",    // shot, saver
      "type",      // writer, face
      "note",      // book, pad
      "hard",      // ware, drive
      "soft",      // ware
      "net",       // work, flix
      "broad",     // cast, band
      "wire",      // less
      "blue",      // tooth
      "face",      // book
      "you",       // tube
      "insta",     // gram
      "tik",       // tok
      "pin",       // terest
      "linked",    // in
      "tweet",     // er
      "hash",      // tag
      "viral",     // video
      "meme",      // lord
      "click",     // bait
      "scroll",    // bar
      "swipe",     // right, left
      "tap",       // dance
      "drag",      // drop
      "copy",      // paste
      "cut",       // paste
      "paste",     // board
      "delete",    // key
      "enter",     // key
      "space",     // bar
      "shift",     // key
      "control",   // panel
      "alt",       // key
      "escape",    // room
      "home",      // page, screen
      "search",    // engine, bar
      "browse",    // r
      "book",      // mark
      "tab",       // let, key
      "window",    // shopping
      "desk",      // top
      "file",      // folder
      "folder",    // icon
      "trash",     // can
      "cloud",     // storage
      "drive",     // google
      "drop",      // box
      "zip",       // file, code
      "pdf",       // file
      "doc",       // ument
      "spread",    // sheet
      "slide",     // show
      "present",   // ation
      "email",     // inbox
      "inbox",     // zero
      "spam",      // filter
      "junk",      // mail
      "reply",     // all
      "forward",   // email
      "attach",    // ment
      "download",  // link
      "upload",    // button
      "stream",    // ing, line
      "buffer",    // zone
      "lag",       // time
      "glitch",    // art
      "bug",       // fix
      "crash",     // landing
      "freeze",    // frame
      "reboot",    // system
      "update",    // software
      "install",   // ation
      "login",     // screen
      "logout",    // button
      "sign",      // up, in
      "profile",   // picture
      "avatar",    // movie
      "bio",       // graphy
      "follow",    // er
      "friend",    // request
      "block",     // chain, ed
      "mute",      // button
      "share",     // button
      "like",      // button
      "comment",   // section
      "post",      // office
      "story",     // time
      "reel",      // life
      "live",      // stream
      "podcast",   // episode
      "vlog",      // ger
      "blog",      // post
      "wiki",      // pedia
      "forum",     // post
      "thread",    // bare
      "chat",      // room, bot
      "bot",       // tom
      "ai",        // artificial
      "robot",     // cop
      "cyber",     // punk, space
      "virtual",   // reality
      "pixel",     // art
      "digital",   // art
      "code",      // word
      "program",   // mer
      "app",       // store
      "game",      // play, boy
      "console",   // gaming
      "controller",// game
      "joystick",  // gaming
      "vr",        // headset
      "headset",   // gaming
      "speaker",   // phone
      "mic",       // rophone
      "camera",    // roll
      "selfie",    // stick
      "filter",    // photo
      "edit",      // button
      "crop",      // photo
      "zoom",      // call, in
      "face",      // time
      "video",     // call, game
      "voice",     // mail
    ]
  },

  home: {
    name: "Home & Household",
    words: [
      "home",      // work, town
      "house",     // wife, work
      "door",      // bell, knob
      "window",    // sill, pane
      "roof",      // top
      "floor",     // board
      "wall",      // paper
      "ceiling",   // fan
      "room",      // mate
      "bed",       // room, time
      "bath",      // room, tub
      "kitchen",   // sink
      "living",    // room
      "dining",    // room
      "garage",    // door, sale
      "base",      // ment
      "attic",     // space
      "porch",     // swing
      "deck",      // chair
      "yard",      // sale, work
      "garden",    // hose
      "lawn",      // mower
      "fence",     // post
      "gate",      // way, keeper
      "mail",      // box
      "trash",     // can
      "garbage",   // truck
      "recycl",    // ing bin
      "compost",   // bin
      "chimney",   // sweep
      "fire",      // place
      "stair",     // case, way
      "hall",      // way
      "closet",    // space
      "shelf",     // life
      "drawer",    // pull
      "cabinet",   // door
      "counter",   // top
      "sink",      // hole
      "faucet",    // water
      "drain",     // pipe
      "pipe",      // line
      "toilet",    // paper
      "shower",    // head
      "bath",      // tub, robe
      "towel",     // rack, bar
      "soap",      // dish, opera
      "shampoo",   // bottle
      "mirror",    // ball, image
      "razor",     // blade, sharp
      "tooth",     // brush, paste
      "comb",      // over
      "brush",     // fire
      "hair",      // dryer
      "curling",   // iron
      "iron",      // board, man
      "laundry",   // room, basket
      "washer",    // dryer
      "dryer",     // sheet
      "detergent", // pod
      "bleach",    // white
      "fabric",    // softener
      "hanger",    // coat
      "vacuum",    // cleaner
      "mop",       // bucket
      "broom",     // stick
      "dust",      // pan
      "sponge",    // bob, cake
      "dish",      // washer, soap
      "pot",       // holder, luck
      "pan",       // cake, handle
      "oven",      // mitt
      "stove",     // top
      "micro",     // wave, phone
      "fridge",    // magnet
      "freezer",   // burn
      "blender",   // bottle
      "toaster",   // oven
      "coffee",    // maker, pot
      "kettle",    // bell, corn
      "tea",       // pot, kettle
      "cup",       // board, cake
      "mug",       // shot
      "glass",     // ware
      "plate",     // form
      "bowl",      // ing
      "fork",      // lift
      "knife",     // edge
      "spoon",     // feed
      "napkin",    // holder
      "table",     // cloth
      "chair",     // man, lift
      "couch",     // potato
      "sofa",      // cushion
      "pillow",    // case, fight
      "blanket",   // statement
      "sheet",     // music
      "mattress",  // pad
      "lamp",      // shade
      "light",     // bulb
      "switch",    // blade
      "plug",      // in
      "outlet",    // mall
      "cord",      // less
      "remote",    // control
      "tv",        // show
      "cable",     // car
      "antenna",   // signal
      "clock",     // work, tower
      "alarm",     // clock
      "smoke",     // detector
      "fire",      // alarm
      "lock",      // smith, down
      "key",       // hole, chain
      "handle",    // bar
      "knob",      // door
      "hinge",     // door
      "nail",      // polish
      "screw",     // driver
      "hammer",    // time
      "drill",     // bit
      "saw",       // dust
      "tape",      // measure
      "paint",     // brush, ball
      "brush",     // stroke
      "roller",    // coaster
      "ladder",    // climb
    ]
  },

  movies: {
    name: "Movies & Entertainment",
    words: [
      "star",      // wars, trek
      "spider",    // man
      "bat",       // man
      "super",     // man, hero
      "iron",      // man
      "wonder",    // woman
      "black",     // panther, widow
      "captain",   // america, marvel
      "ant",       // man
      "doctor",    // strange, who
      "thor",      // hammer
      "hulk",      // smash
      "guardian",  // galaxy
      "avenger",   // endgame
      "justice",   // league
      "x",         // men
      "fantastic", // four
      "dead",      // pool
      "wolverine", // claws
      "joker",     // wild, card
      "harley",    // quinn, davidson
      "cat",       // woman
      "aqua",      // man, marine
      "flash",     // light, gordon
      "green",     // lantern, arrow
      "arrow",     // head
      "super",     // girl, natural
      "legend",    // dairy, ary
      "myth",      // busters
      "ghost",     // busters
      "men",       // in black
      "matrix",    // movie
      "terminator",// movie
      "predator",  // movie
      "alien",     // movie, vs
      "jurassic",  // park, world
      "indiana",   // jones
      "james",     // bond
      "mission",   // impossible
      "fast",      // furious
      "furious",   // seven
      "ocean",     // eleven
      "italian",   // job
      "french",    // connection
      "godfather", // movie
      "good",      // fellas
      "scar",      // face
      "casino",    // royale
      "fight",     // club
      "pulp",      // fiction
      "kill",      // bill
      "reservoir", // dogs
      "django",    // unchained
      "inception", // movie
      "inter",     // stellar
      "dark",      // knight
      "toy",       // story
      "finding",   // nemo, dory
      "lion",      // king
      "beauty",    // beast
      "little",    // mermaid
      "snow",      // white
      "sleeping",  // beauty
      "frozen",    // movie
      "tangled",   // movie
      "moana",     // movie
      "coco",      // movie
      "inside",    // out
      "up",        // movie
      "wall",      // e
      "monsters",  // inc
      "cars",      // movie
      "ratatouille",// movie
      "brave",     // heart
      "shrek",     // movie
      "kung",      // fu panda
      "how",       // to train
      "despicable",// me
      "minion",    // movie
      "secret",    // life
      "sing",      // movie
      "trolls",    // movie
      "boss",      // baby
      "angry",     // birds
      "lego",      // movie
      "emoji",     // movie
      "wreck",     // it ralph
      "big",       // hero, lebowski
      "harry",     // potter
      "lord",      // rings
      "hobbit",    // movie
      "hunger",    // games
      "twilight",  // zone, movie
      "maze",      // runner
      "divergent", // movie
      "fault",     // stars
      "notebook",  // movie
      "titanic",   // movie
      "greatest",  // showman
      "la",        // la land
      "bohemian",  // rhapsody
      "rocket",    // man
      "straight",  // outta
      "walk",      // line
      "ray",       // movie
      "dream",     // girls
      "musical",   // movie
      "horror",    // movie
      "comedy",    // movie
      "action",    // movie
      "thriller",  // movie
      "drama",     // queen
      "romance",   // movie
      "sci",       // fi
      "fantasy",   // movie
      "western",   // movie
      "war",       // movie
      "documentary",// movie
      "animated",  // movie
      "silent",    // film, night
      "classic",   // movie
      "indie",     // film
      "block",     // buster
      "box",       // office
      "red",       // carpet
      "oscar",     // award
      "emmy",      // award
      "grammy",    // award
      "golden",    // globe
      "critics",   // choice
      "screen",    // test
      "sound",     // track
      "original",  // score
      "best",      // picture, actor
      "supporting",// actor
      "director",  // cut
      "producer",  // movie
      "writer",    // block
      "editor",    // movie
      "camera",    // man
      "stunt",     // double, man
      "extra",     // movie
      "scene",     // movie
      "take",      // two, one
      "cut",       // scene
      "action",    // scene, figure
      "wrap",      // party
    ]
  },

  music: {
    name: "Music",
    words: [
      "rock",      // star, band
      "pop",       // star, music
      "hip",       // hop
      "rap",       // battle, music
      "jazz",      // hands, music
      "blues",     // music
      "country",   // music, side
      "folk",      // music, song
      "soul",      // music, food
      "funk",      // music, y
      "disco",     // ball, music
      "techno",    // music
      "house",     // music, party
      "electronic",// music
      "classical", // music
      "opera",     // house, music
      "symphony",  // orchestra
      "orchestra", // pit
      "band",      // aid, wagon
      "choir",     // boy, practice
      "solo",      // act
      "duo",       // act
      "trio",      // act
      "quartet",   // string
      "acoustic",  // guitar
      "electric",  // guitar, slide
      "bass",      // guitar, drum
      "lead",      // guitar, singer
      "rhythm",    // guitar
      "drum",      // stick, roll
      "snare",     // drum
      "kick",      // drum
      "cymbal",    // crash
      "hi",        // hat
      "tom",       // tom
      "piano",     // man, keys
      "keyboard",  // player
      "synth",     // esizer
      "organ",     // donor, pipe
      "violin",    // player
      "cello",     // player
      "viola",     // player
      "bass",      // player
      "harp",      // player
      "flute",     // player
      "clarinet",  // player
      "saxophone", // player
      "trumpet",   // player
      "trombone",  // player
      "tuba",      // player
      "french",    // horn
      "harmonica", // player
      "accordion", // player
      "banjo",     // player
      "mandolin",  // player
      "ukulele",   // player
      "mic",       // drop, check
      "amp",       // lifier
      "speaker",   // box
      "mixer",     // board
      "sound",     // check, board
      "track",     // list
      "album",     // cover
      "single",    // release
      "ep",        // release
      "lp",        // vinyl
      "vinyl",     // record
      "cd",        // player
      "cassette",  // tape
      "playlist",  // spotify
      "shuffle",   // mode
      "repeat",    // mode
      "skip",      // track
      "pause",     // button
      "play",      // button, list
      "stop",      // button
      "volume",    // up, down
      "mute",      // button
      "bass",      // boost
      "treble",    // boost
      "equalizer", // settings
      "tempo",     // fast, slow
      "beat",      // drop, box
      "rhythm",    // beat
      "melody",    // line
      "harmony",   // vocal
      "chord",     // progression
      "riff",      // guitar
      "hook",      // catchy
      "verse",     // chorus
      "chorus",    // line
      "bridge",    // section
      "intro",     // duction
      "outro",     // end
      "fade",      // out, in
      "drop",      // beat
      "breakdown", // dance
      "build",     // up
      "crescendo", // peak
      "lyric",     // video
      "vocal",     // harmony
      "backing",   // track
      "lead",      // vocal
      "harmony",   // singer
      "duet",      // song
      "cover",     // song, band
      "remix",     // version
      "mashup",    // song
      "sample",    // music
      "loop",      // beat
      "studio",    // album
      "live",      // album, show
      "concert",   // tour
      "tour",      // bus, date
      "gig",       // economy
      "festival",  // music
      "stage",     // dive
      "crowd",     // surf
      "mosh",      // pit
      "encore",    // performance
      "setlist",   // concert
      "headliner", // act
      "opener",    // act
      "roadie",    // crew
      "groupie",   // fan
      "fan",       // club, base
      "merchandise",// table
      "poster",    // wall
      "autograph", // signing
      "meet",      // greet
      "vip",       // pass
      "back",      // stage
      "green",     // room
      "sound",     // check
      "rehearsal", // practice
      "jam",       // session
      "improv",    // music
      "freestyle", // rap
      "battle",    // rap
      "cypher",    // rap
      "open",      // mic
      "karaoke",   // night
      "sing",      // along
      "dance",     // floor
      "dj",        // booth
      "turntable", // dj
      "scratch",   // dj
      "crossfade", // mix
      "transition",// dj
      "bpm",       // tempo
      "key",       // musical
      "major",     // key
      "minor",     // key
      "flat",      // note
      "sharp",     // note
      "natural",   // note
      "scale",     // musical
      "octave",    // range
      "pitch",     // perfect
      "tone",      // deaf
      "tune",      // up
      "note",      // musical
      "rest",      // musical
      "measure",   // bar
      "time",      // signature
      "sheet",     // music
      "score",     // musical
      "compose",   // music
      "arrange",   // music
      "produce",   // music
      "record",    // music
      "mix",       // music
      "master",    // track
      "release",   // music
      "chart",     // topper
      "hit",       // song
      "one",       // hit wonder
      "gold",      // record
      "platinum",  // record
      "diamond",   // record
      "award",     // show
      "grammy",    // award
      "billboard", // chart
      "top",       // 40, 100
      "number",    // one
      "debut",     // album
      "comeback",  // album
      "farewell",  // tour
      "reunion",   // tour
      "tribute",   // band
      "cover",     // band
      "garage",    // band
      "indie",     // band
      "mainstream",// music
      "underground",// music
      "alternative",// music
      "punk",      // rock
      "metal",     // music
      "grunge",    // music
      "emo",       // music
      "goth",      // music
      "reggae",    // music
      "ska",       // music
      "latin",     // music
      "salsa",     // music
      "merengue",  // music
      "bachata",   // music
      "cumbia",    // music
      "mariachi",  // band
      "flamenco",  // music
      "tango",     // dance
      "bossa",     // nova
      "samba",     // music
      "afro",      // beat
      "world",     // music
    ]
  },

  travel: {
    name: "Travel & Places",
    words: [
      "air",       // port, plane
      "plane",     // crash
      "flight",    // attendant
      "pilot",     // episode
      "runway",    // model
      "takeoff",   // landing
      "landing",   // gear
      "luggage",   // claim
      "baggage",   // claim
      "carry",     // on
      "overhead",  // bin
      "seat",      // belt
      "window",    // seat
      "aisle",     // seat
      "first",     // class
      "business",  // class
      "economy",   // class
      "boarding",  // pass
      "passport",  // control
      "customs",   // declaration
      "visa",      // card
      "terminal",  // gate
      "gate",      // way
      "departure", // gate
      "arrival",   // time
      "delay",     // ed
      "cancel",    // led
      "layover",   // time
      "connection",// flight
      "direct",    // flight
      "round",     // trip
      "one",       // way
      "ticket",    // booth
      "booking",   // reservation
      "hotel",     // room
      "motel",     // room
      "hostel",    // room
      "resort",    // spa
      "vacation",  // time
      "holiday",   // inn
      "getaway",   // weekend
      "trip",      // advisor
      "tour",      // guide
      "guide",     // book
      "map",       // quest
      "compass",   // rose
      "north",     // star
      "south",     // bound
      "east",      // coast
      "west",      // coast
      "road",      // trip
      "highway",   // patrol
      "freeway",   // exit
      "exit",      // ramp
      "rest",      // stop, area
      "gas",       // station
      "pit",       // stop
      "scenic",    // route
      "detour",    // sign
      "shortcut",  // route
      "traffic",   // jam
      "rush",      // hour
      "commute",   // time
      "carpool",   // lane
      "toll",      // booth
      "bridge",    // crossing
      "tunnel",    // vision
      "ferry",     // boat
      "cruise",    // ship
      "yacht",     // club
      "sail",      // boat
      "harbor",    // side
      "port",      // side
      "dock",      // yard
      "pier",      // fishing
      "beach",     // front
      "coast",     // line
      "shore",     // line
      "island",    // hopping
      "tropical",  // paradise
      "paradise",  // island
      "resort",    // town
      "destination",// wedding
      "bucket",    // list
      "sight",     // seeing
      "landmark",  // building
      "monument",  // valley
      "museum",    // tour
      "gallery",   // art
      "theater",   // play
      "stadium",   // tour
      "arena",     // concert
      "park",      // national
      "zoo",       // animal
      "aquarium",  // fish
      "botanical", // garden
      "historic",  // site
      "ancient",   // ruins
      "castle",    // tour
      "palace",    // royal
      "temple",    // run
      "church",    // service
      "cathedral", // tour
      "mosque",    // tour
      "synagogue", // tour
      "shrine",    // visit
      "tower",     // clock
      "bridge",    // golden
      "wall",      // great
      "falls",     // niagara
      "canyon",    // grand
      "mountain",  // climb
      "volcano",   // active
      "glacier",   // tour
      "rainforest",// tour
      "safari",    // tour
      "jungle",    // trek
      "desert",    // tour
      "oasis",     // water
      "dune",      // buggy
      "cave",      // tour
      "waterfall", // hike
      "hiking",    // trail
      "camping",   // trip
      "tent",      // setup
      "campfire",  // story
      "sleeping",  // bag
      "backpack",  // ing
      "trek",      // king
      "climb",     // ing
      "summit",    // peak
      "base",      // camp
      "trail",     // head
      "path",      // way
      "scenic",    // view
      "overlook",  // point
      "vista",     // point
      "panorama",  // view
      "sunset",    // view
      "sunrise",   // view
      "photo",     // op
      "selfie",    // spot
      "souvenir",  // shop
      "gift",      // shop
      "duty",      // free
      "exchange",  // rate
      "currency",  // exchange
      "traveler",  // check
      "credit",    // card
      "cash",      // money
      "tip",       // jar
      "local",     // food
      "street",    // food
      "cuisine",   // local
      "authentic", // food
      "reservation",// dinner
      "dining",    // out
      "nightlife", // scene
      "bar",       // hopping
      "club",      // scene
      "live",      // music
      "show",      // time
      "ticket",    // sales
      "admission", // fee
      "free",      // entry
      "guided",    // tour
      "self",      // guided
      "audio",     // tour
      "walking",   // tour
      "bus",       // tour
      "boat",      // tour
      "bike",      // tour
      "segway",    // tour
      "helicopter",// tour
      "hot",       // air balloon
      "balloon",   // ride
      "zip",       // line
      "bungee",    // jump
      "skydive",   // jump
      "scuba",     // dive
      "snorkel",   // ing
      "surf",      // ing
      "kayak",     // ing
      "paddle",    // board
      "jet",       // ski
      "parasail",  // ing
      "water",     // sports
      "adventure", // travel
      "extreme",   // sports
      "thrill",    // seeker
      "adrenaline",// rush
      "bucket",    // list
      "once",      // lifetime
    ]
  },

  work: {
    name: "Work & Business",
    words: [
      "work",      // place, load
      "job",       // interview, offer
      "career",    // path, change
      "office",    // space, building
      "desk",      // job, top
      "chair",     // man, woman
      "computer",  // screen
      "laptop",    // bag
      "keyboard",  // typing
      "mouse",     // click, pad
      "screen",    // time, saver
      "monitor",   // display
      "printer",   // paper
      "scanner",   // document
      "copier",    // machine
      "fax",       // machine
      "phone",     // call
      "email",     // inbox
      "meeting",   // room
      "conference",// call, room
      "board",     // room, meeting
      "presentation",// slides
      "project",   // manager
      "deadline",  // pressure
      "schedule",  // meeting
      "calendar",  // invite
      "agenda",    // meeting
      "minutes",   // meeting
      "notes",     // taking
      "report",    // writing
      "document",  // file
      "file",      // cabinet
      "folder",    // organize
      "binder",    // clip
      "stapler",   // office
      "paper",     // clip, work
      "pen",       // writing
      "pencil",    // sharpener
      "highlighter",// marker
      "marker",    // board
      "white",     // board
      "sticky",    // note
      "post",      // it note
      "notebook",  // writing
      "planner",   // daily
      "organizer", // desk
      "inbox",     // email
      "outbox",    // email
      "memo",      // note
      "letter",    // writing
      "envelope",  // mail
      "stamp",     // postage
      "mail",      // room
      "package",   // delivery
      "delivery",  // service
      "shipping",  // cost
      "invoice",   // payment
      "receipt",   // expense
      "expense",   // report
      "budget",    // planning
      "forecast",  // financial
      "quarter",   // ly report
      "annual",    // report
      "fiscal",    // year
      "revenue",   // stream
      "profit",    // margin
      "loss",      // statement
      "balance",   // sheet
      "cash",      // flow
      "payroll",   // department
      "salary",    // negotiation
      "bonus",     // payment
      "commission",// sales
      "raise",     // promotion
      "promotion", // job
      "demotion",  // job
      "hire",      // new
      "fire",      // terminate
      "lay",       // off
      "resign",    // quit
      "retire",    // ment
      "pension",   // plan
      "benefits",  // package
      "insurance", // health
      "vacation",  // time
      "sick",      // leave
      "maternity", // leave
      "paternity", // leave
      "remote",    // work
      "hybrid",    // work
      "commute",   // time
      "clock",     // in, out
      "overtime",  // pay
      "shift",     // work
      "part",      // time
      "full",      // time
      "contract",  // work
      "freelance", // work
      "consultant",// work
      "intern",    // ship
      "trainee",   // program
      "mentor",    // ship
      "training",  // program
      "workshop",  // session
      "seminar",   // presentation
      "webinar",   // online
      "team",      // building
      "morale",    // boost
      "culture",   // company
      "values",    // company
      "mission",   // statement
      "vision",    // statement
      "strategy",  // business
      "goal",      // setting
      "objective", // business
      "target",    // sales
      "quota",     // sales
      "performance",// review
      "feedback",  // constructive
      "evaluation",// employee
      "appraisal", // performance
      "rating",    // system
      "rank",      // ing
      "promotion", // ladder
      "ladder",    // climb
      "corporate", // ladder
      "executive", // level
      "management",// level
      "supervisor",// level
      "employee",  // level
      "staff",     // meeting
      "crew",      // team
      "department",// head
      "division",  // manager
      "branch",    // office
      "headquarters",// main
      "subsidiary",// company
      "parent",    // company
      "merger",    // acquisition
      "acquisition",// deal
      "takeover",  // hostile
      "partnership",// business
      "joint",     // venture
      "venture",   // capital
      "startup",   // company
      "entrepreneur",// business
      "founder",   // ceo
      "ceo",       // chief
      "cfo",       // finance
      "coo",       // operations
      "cto",       // technology
      "board",     // directors
      "shareholder",// meeting
      "investor",  // relations
      "stock",     // market
      "share",     // price
      "dividend",  // payment
      "portfolio", // investment
      "asset",     // management
      "liability", // company
      "equity",    // stake
      "debt",      // financing
      "loan",      // business
      "credit",    // line
      "capital",   // funding
      "funding",   // round
      "seed",      // funding
      "series",    // a, b, c
      "ipo",       // initial
      "public",    // company
      "private",   // company
      "valuation", // company
      "exit",      // strategy
      "sale",      // business
      "bankruptcy",// filing
      "restructure",// company
      "downsize",  // company
      "layoff",    // mass
      "outsource", // work
      "offshore",  // work
      "onshore",   // work
      "supply",    // chain
      "vendor",    // management
      "client",    // relations
      "customer",  // service
      "sales",     // team
      "marketing", // team
      "advertising",// campaign
      "pr",        // public relations
      "brand",     // awareness
      "logo",      // design
      "slogan",    // tagline
      "campaign",  // marketing
      "launch",    // product
      "product",   // line
      "service",   // offering
      "price",     // point
      "discount",  // offer
      "promotion", // sale
      "deal",      // close
      "negotiate", // contract
      "proposal",  // business
      "bid",       // tender
      "contract",  // sign
      "agreement", // terms
      "terms",     // conditions
      "nda",       // agreement
      "non",       // compete
      "compete",   // market
      "market",    // share
      "industry",  // leader
      "competitor",// analysis
      "benchmark", // standard
      "best",      // practice
      "innovation",// product
      "research",  // development
      "development",// team
      "prototype", // testing
      "testing",   // phase
      "launch",    // date
      "rollout",   // plan
      "scale",     // up
      "growth",    // strategy
      "expansion", // plan
      "diversify", // business
      "pivot",     // strategy
      "rebrand",   // company
      "transform", // digital
      "automate",  // process
      "streamline",// operations
      "optimize",  // efficiency
      "efficiency",// improve
      "productivity",// boost
      "quality",   // control
      "compliance",// legal
      "regulation",// industry
      "audit",     // financial
      "risk",      // management
      "crisis",    // management
      "reputation",// management
      "stakeholder",// management
    ]
  }
};

// Populate "all" with every word from every theme
const allWords = new Set();
Object.keys(themes).forEach(key => {
  if (key !== 'all' && themes[key].words) {
    themes[key].words.forEach(word => allWords.add(word));
  }
});
themes.all.words = Array.from(allWords);

module.exports = themes;
