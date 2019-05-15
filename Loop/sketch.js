//Coordinate variables
  let x = 0;
  let y = 100;
//Size variables
  let size = 50;

function setup(){
  createCanvas(windowWidth,windowHeight);
  background(255);
}

function draw(){
  var x = 0;
  //If x is less than the width x+50
  for (var x=0; x <= width; x = x + 50)

  //Create an ellipse with a random color
  ellipse(x,random(windowHeight), size, size);
  fill(random(0,255),random(0,255),random(0,255))
}
