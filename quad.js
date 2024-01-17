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
      fill('blue');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let dormZone = {
    x: 440,
    y: 20,
    size: 40,
    draw: function() {
      fill('green');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let LibraryZone = {
    x: 100,
    y: 20,
    size: 40,
    draw: function() {
      fill('pink');
      rect(this.x, this.y, this.size, this.size);
    }
  };

  let wilkensZone = {
    x: 100,
    y: 420,
    size: 40,
    draw: function() {
      fill('yellow');
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
    dormZone.draw();
    LibraryZone.draw();
    wilkensZone.draw();

    if(keyIsPressed){
      if(keyCode == LEFT_ARROW){
        player.x = player.x - 3;
      } else if (keyCode == RIGHT_ARROW){
        player.x = player.x + 3;
      }
      if (keyCode == UP_ARROW){
        player.y = player.y - 3;
      } else if (keyCode == DOWN_ARROW){
        player.y = player.y + 3;
    }  
  }

  let jycDist = dist(player.x, player.y, JYCZone.x + JYCZone.size / 2, JYCZone.y + JYCZone.size / 2);
  if(jycDist < 30) {
    this.sceneManager.showScene( JYC );
    player.x = 7;
    JYCZone.y = 400;
  }

  let dormDist = dist(player.x, player.y, dormZone.x + dormZone.size / 2, dormZone.y + dormZone.size / 2);
  if(dormDist < 30) {
    this.sceneManager.showScene( dorm );
    player.x = 7;
    dormZone.y = 20;
  }

  let libraryDist = dist(player.x, player.y, LibraryZone.x + LibraryZone.size / 2, LibraryZone.y + LibraryZone.size / 2);
  if(libraryDist < 30) {
    this.sceneManager.showScene( library );
    player.x = 7;
    ccLibraryZone.y = 100;
  }
  
  let wilkensDist = dist(player.x, player.y, wilkensZone.x + wilkensZone.size / 2, wilkensZone.y + wilkensZone.size / 2);
  if(wilkensDist < 30) {
    this.sceneManager.showScene( wilkens );
    player.x = 7;
    wilkensZone.y = 100;
  }

  }



// create an array of all the pages 
// then create a variable to keep track of what page you're on 
// identify what areas on the map are 'transporation zones'
// when the sprite enters a transporation zone, 
// alter the 'current' variable to match the corresponding map/page
}