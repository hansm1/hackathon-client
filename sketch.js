
let pages = [Quad, JYC, ccLibrary, wilkens, dorm, seeker]


function setup () {
  createCanvas(400, 600);
  var mgr = new SceneManager();
    // mgr.bkImage = bkImage; // inject bkImage property
    mgr.wire();
    mgr.showScene( Seeker );
}



// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
          // alter the 'current' variable to match the corresponding map/page