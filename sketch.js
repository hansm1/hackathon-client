let img;

function preload () {
  img = loadImage("PH.png");
}

function setup () {
  new Canvas()
}

function draw () {

  image(img, 0,0, width, height);
  fill(255,255,255,191);
  rect((width/2)-250,(height/2)-150,500,300,20)

  fill(31, 75, 126);
  text("Emmanuel College", width/2, height/2-100);
  text("Prop Hunt", width/2, height/2+100);
  textSize(50);
  textAlign(CENTER, CENTER);

  fill(242, 185, 11);
  rect((width/2)-200,(height/2)-50,400,100,20);
  stroke(255);
  strokeWeight(2);

  fill(31, 75, 126);
  text("Press to Begin", width/2, height/2);
  
}

function mouseClicked () {
  
}
