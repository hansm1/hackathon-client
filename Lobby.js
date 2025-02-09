function Lobby() {

  var lobbyTimer;

  this.setup = function () {
    new Canvas()

    lobbyTimer = new GameTimer();
    lobbyTimer.start();
    lobbyTimer.a = 30;
    lobbyTimer.boxX = width / 2 - 50;
    lobbyTimer.boxY = 180;
    lobbyTimer.text = 'Start in:';

    let gold = color(242, 185, 11);
    let darkblue = color(31, 75, 126);
    let startButton = createButton("Press to Start");
    startButton.position((width/2)-187,(height/2)-25);
    startButton.size(375,75);
    startButton.style('font-size', '50px');
    startButton.style('background-color', gold);
    startButton.style('color', darkblue);
    startButton.style('font-family', "Pixelify Sans");
    startButton.style('border-color', darkblue);
  
    startButton.mousePressed(() => {
      startButton.hide();
      this.sceneManager.showScene( Quad );
    });

  }

  this.draw = function () {

    image(lobby_bg, 0, 0, width, height);
    fill(31, 75, 126);

    textSize(35);
    textFont('Pixelify Sans');
    text('Emmanuel College', width / 2, 30);
    text("Prop Hunt", width / 2, 60);

    textSize(25);
    textFont('Pixelify Sans');

    fill(31, 75, 126, 175);
    rect(1, 1, 195, 235);
    rect(width - 195, 1, 195, 235);
    fill('white');
    text('Rules:', 90, 25);
    text('Players Joined:', width - 100, 20);

    textSize(15);

    const rulesText = `One player is randomly 
  assigned as a seeker and the 
  rest are props. Once a prop is 
  [REDACTED], it becomes a
  seeker. The props have 30 
  seconds to hide before the 
  seekers are released. The 
  seekers have 3 minutes to 
  find the props before the 
  props win.`;
    text(rulesText, 90, 140)

    lobbyTimer.draw();

    if (lobbyTimer.elapsed()) {
      this.sceneManager.showScene( Quad );
    }

  }
}