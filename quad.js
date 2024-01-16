function Quad() {

  let player = {
    x: 200,
    y: 200,
    size: 40,
    draw: function() {
      fill('red');
      ellipse(this.x, this.y, this.size, this.size);
    }
  };

    // let x = 200;
    // let y = 200;
    // let d = 40;

    this.setup = function () {
    // canvas
    createCanvas(500, 500);
  }
  
  this.draw = function () {
    background(220);
    player.draw();
    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        player.x--;
      } else if (keyCode == RIGHT_ARROW){
        player.x++;
      }
      if (keyCode == UP_ARROW){
        player.y--;
      } else if (keyCode == DOWN_ARROW){
        player.y++;
    }
  }
  // ellipse(x, y, d, d)
  }


// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
// alter the 'current' variable to match the corresponding map/page
}