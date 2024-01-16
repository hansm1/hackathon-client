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

  let JYCZone = {
    x: 400,
    y: 400,
    size: 40,
    draw: function() {
      fill('red');
      rect(this.x, this.y, this.size, this.size);
    }
  };

    this.setup = function () {
    // canvas
    createCanvas(500, 500);
  }
  
  this.draw = function () {
    background(220);
    player.draw();
    JYCZone.draw();
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
  let d = dist(player.x, player.y, JYCZone.x, JYCZone.y);
  if(d < 15) {
    this.sceneManager.showScene( JYC );
    player.x = 7;
    JYCZone.y = 485;
  }

  }


// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
// alter the 'current' variable to match the corresponding map/page
}