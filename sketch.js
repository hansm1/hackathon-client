function setup () {
  new Canvas()
}

function draw () {

  background(31, 75, 126);

  fill(242, 185, 11);
  text("Emmanuel College", width/2, height/2-100);
  text("Prop Hunt", width/2, height/2+100);
  textSize(50);
  textAlign(CENTER, CENTER);

  fill(242, 185, 11);
  rect((width/2)-200,(height/2)-50,400,100,20);
  stroke(255);
  strokeWeight(2);

  fill(255);
  text("Press to Begin", width/2, height/2);
  
}
