var x = 200;
var y = 200;
var d = 40;
function setup () {
  // canvas
  createCanvas(500, 500);
  fill(150);
}

function draw () {
  background(220);
  if(keyIsPressed){
    if(keyCode == LEFT_ARROW){
      x--;
    } else if (keyCode == RIGHT_ARROW){
      x++;
    }
    if (keyCode == UP_ARROW){
      y--;
    } else if (keyCode == DOWN_ARROW){
      y++;
    }
  }
  ellipse(x, y, d, d)
}



// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
          // alter the 'current' variable to match the corresponding map/page