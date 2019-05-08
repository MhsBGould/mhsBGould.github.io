function setup() {
  createCanvas(400,400)
}

function draw() {
  background(0, 255, 255);
  fill(73, 199, 48);
  // The ground
  rect(0, 300, 400, 100);


  // The sun
  fill(183, 194, 31);
  ellipse(80, 64, 100, 100);

  // The snowman
  fill(255, 255, 255);
  ellipse(200, 300, 150, 150);//bottom
  ellipse(200, 200, 100, 100);//middle
  ellipse(200, 120, 75, 75);//top

  //The Arms
  line(160, 200, 25, 199);//left arm
  line(240, 200, 75, 100);//right arm

}
