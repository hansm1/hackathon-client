function dorm() {
    
  let player = {
    x: 200,
    y: 200,
    size: 40,
    draw: function() {
      fill('red');
      ellipse(this.x, this.y, this.size, this.size);
    }
  };

  let QuadZone = {
  x: 440,
  y: 20,
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
    background('green');
    player.draw();
    QuadZone.draw();

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

  let QuadDist = dist(player.x, player.y, QuadZone.x + QuadZone.size / 2, QuadZone.y + QuadZone.size / 2);
  if(QuadDist < 30) {
    this.sceneManager.showScene( Quad );
    player.x = 7;
    QuadZone.y = 20;
  }
  }
}