const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
const insertX = [
  'Nataly Hurley', 'Van English', 'Kelly Sanford', 'Truett Kemp', 'Anika Castaneda',
  'Collin Villanueva', 'Monroe Alvarez', 'Xavier Santiago', 'Nyla Jenkins', 'Declan Copeland',
  'Dayana Carrillo', 'Wade Pollard', 'Marisol O’Connor', 'Princeton Mora', 'Jemma Blackwell',
  'Marcellus Cole', 'Margaret Atkinson', 'Duke McCann', 'Joyce Reed', 'Easton Kirby',
  'Skyla Spears', 'Ameer Ayala', 'Blair Matthews', 'Preston Flores', 'Emilia Garcia',
  'James Clay', 'Aliana Miles', 'Jared Cano', 'Egypt Vincent', 'Aarav Hensley',
  'Malaya Hunt', 'Jesus Stuart', 'Stormi Olsen', 'Skyler Rodgers', 'Selah Graves',
  'Cesar Monroe', 'Carly Gregory', 'Travis Greer', 'Reina David', 'Alonso Magana',
  'Julianna Morales', 'Aaron Montes', 'Roselyn Stewart', 'Nolan Nicholson', 'Justice Harrington',
  'Omari Wheeler', 'Sydney Shepherd', 'Ronald Clark', 'Chloe Alfaro', 'Xzavier Quinn',
  'Heaven Franco', 'Gage Brennan', 'Elodie Vance', 'Casen Bowers', 'Elisa Washington',
  'Juan Vu', 'Kimora Hutchinson', 'Korbin Warren', 'Sloane O’Neal', 'Eddie Lozano',
  'Cecelia Horton', 'Garrett Palacios', 'Bria Shepherd', 'Ronald McIntosh', 'Gwen Costa',
  'Kenji Shah', 'Angelica Palacios', 'Thaddeus Hopkins', 'Gabriela Love', 'Jeffrey Morse',
  'Kairi Schultz', 'Cody Reese', 'Rosemary Carr', 'Kash Chung', 'Rivka Ortiz',
  'Landon Wang', 'Kailani Mack', 'Esteban Escobar', 'Erin Lewis', 'Wyatt Leach',
  'Martha McCullough', 'Briar Burton', 'Miriam Payne', 'Edward Bell', 'Melody Villalobos'
];
const insertY = [
  'New York City, USA', 'Eiffel Tower, Paris, France', 'Big Ben, London, UK', 'Colosseum, Rome, Italy', 'Great Wall of China, China',
  'Taj Mahal, India', 'Mount Fuji, Japan', 'Sydney Opera House, Australia', 'Niagara Falls, Canada/USA', 'Statue of Liberty, USA',
  'The Louvre, Paris, France', 'Times Square, New York, USA', 'Buckingham Palace, London, UK', 'Hollywood Sign, Los Angeles, USA', 'Golden Gate Bridge, San Francisco, USA',
  'Stonehenge, UK', 'Christ the Redeemer, Rio de Janeiro, Brazil', 'Machu Picchu, Peru', 'The Pyramids of Giza, Egypt', 'Acropolis of Athens, Greece',
  'Las Vegas Strip, USA', 'Burj Khalifa, Dubai, UAE', 'The Vatican, Vatican City', 'Versailles Palace, France', 'Grand Canyon, USA',
  'Mount Everest, Nepal/Tibet', 'The White House, Washington D.C., USA', 'The Berlin Wall, Germany', 'Sagrada Família, Barcelona, Spain', 'The Kremlin, Moscow, Russia',
  'CN Tower, Toronto, Canada', 'The Alps, Europe', 'The Amazon Rainforest, South America', 'The Dead Sea, Israel/Jordan', 'The Great Barrier Reef, Australia',
  'Disneyland, California, USA', 'The Sahara Desert, North Africa', 'Red Square, Moscow, Russia', 'The Blue Lagoon, Iceland', 'The Shard, London, UK'
];
const insertZ = [
  'vanished without a trace', 'did a backflip into the bushes', 'ran off screaming', 'exploded in a cloud of glitter', 'dissolved into the air',
  'teleported into the void', 'started dancing uncontrollably', 'fainted from excitement', 'slipped on a banana peel', 'burst into song',
  'howled at the moon', 'screamed like a banshee', 'laughed maniacally', 'built a sandcastle furiously', 'yelled “YOLO” and jumped',
  'summoned a raccoon army', 'tripped over nothing', 'vanished into a puff of smoke', 'turned into a cloud of bees', 'faceplanted dramatically',
  'moonwalked into traffic', 'turned into confetti', 'sprinted away sobbing', 'popped like a balloon', 'juggled flaming pineapples',
  'screamed “I regret nothing!”', 'climbed a palm tree backward', 'melted into the pavement', 'bellyflopped into a fountain', 'broke into the cha-cha',
  'levitated 6 inches and vanished', 'morphed into a duck', 'barked at a squirrel', 'flew off on a broomstick', 'somersaulted into a bush',
  'challenged a pigeon to a duel', 'cartwheeled away', 'disappeared yelling “BYE!”', 'dropped their phone and cried', 'rode a shopping cart into the sunset'
];
const insertO = [
  'rubber chicken', 'glitter cannon', 'life-sized cardboard cutout of Danny DeVito', 'haunted toaster', 'screaming gnome',
  'banana phone', 'toilet plunger with googly eyes', 'inflatable unicorn', 'talking pineapple', 'cursed fidget spinner',
  'giant spaghetti fork', 'disco ball helmet', 'emotional support cactus', 'spaghetti-scented candle', 'toothbrush microphone',
  'emergency kazoo', 'left sock of destiny', 'mystical jellybean', 'bubble-wrap cape', 'wobbling ladder',
  'expired coupon for hugs', 'confused GPS', 'pickle in a jar of glitter', 'lava lamp full of mayonnaise', 'twerking robot figurine',
  'suspiciously heavy rubber duck', 'award-winning sock puppet', 'screaming alarm clock', 'cowboy hat made of cheese', 'burrito launcher',
  'talking blender', 'toilet seat picture frame', 'enchanted pool noodle', 'emergency pizza whistle', 'glow-in-the-dark ham',
  'pocket-sized trampoline', 'hovering yoga mat', 'polka-dot umbrella with teeth', 'snoring umbrella stand', 'clumsy taxidermy owl',
  'angry garden flamingo', 'enchanted spaghetti strainer', 'self-destructing clipboard', 'haunted ukulele', 'smelly wizard hat',
  'soup-flavored air freshener', 'floating door knob', 'flaming roller skates', 'dancing taco plushie', 'whispering oven mitt'
];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replaceAll(':insertx:',xItem);
  newStory = newStory.replaceAll(':inserty:',yItem);
  newStory = newStory.replaceAll(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob', name);
  }

  if (document.getElementById("uk").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replaceAll('94 fahrenheit', temperature);
    newStory = newStory.replaceAll('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}

