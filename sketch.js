let img;

function preload () {
  img = loadImage("PH.png");
}

function setup () {
  new Canvas()

  let gold = color(242, 185, 11);
  let darkblue = color(31, 75, 126);

  let button = createButton("Press to Begin");
  button.position((width/2)-187,(height/2)-25);
  button.size(375,75);
  button.style('font-size', '50px');
  button.style('background-color', gold);
  button.style('color', darkblue);
  button.style('stroke', darkblue);
  button.style('font-family', "Pixelify Sans");
  button.style('border-color', darkblue);

}

function draw () {

  image(img, 0,0, width, height);
  fill(255,255,255,191);
  rect((width/2)-210,(height/2)-75,420,175)

  fill(31, 75, 126);
  text("Emmanuel College", width/2, height/2-50);
  text("Prop Hunt", width/2, height/2+75);
  textSize(50);
  textFont("Pixelify Sans");
  textAlign(CENTER, CENTER);
  
}

function mouseClicked () {
  
}
