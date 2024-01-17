
let pages = [Quad, JYC]
let trashcan;
let campus_bg;
let player;

function preload () {
  trashcan = loadImage('game_designs/universal/trashcan.jpg');
  campus_bg = loadImage('PH.png');
}

function setup () {
  createCanvas(400, 600);
  player = new Sprite(trashcan, 100, 100, 30, 30, true);
  var mgr = new SceneManager();
    // mgr.bkImage = bkImage; // inject bkImage property
    mgr.wire();
    mgr.showScene( StartScreen );
}



// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
          // alter the 'current' variable to match the corresponding map/page
