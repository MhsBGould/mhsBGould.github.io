/* Moving things and staying on the canvas
Brady Gould
2018-09-01*/

//position variables
var posX= 200;
var posY = 200;
var posX2 = 200;
var posY2 = 200;
// speed and size variables
var speedX = 5;
var speedY = 5;
var speedX2 = 5;
var speedY2 = 5;
var rect2 =200;
var size = 40;

function setup() {
  var myCanvas = createCanvas(800, 600);
  frameRate(60);
}

function draw() {
  //Rectangle and positioning
  rectMode(CENTER)
  background(127);
  fill(255);
  rect(posX, posY, size, size);
  posX = posX + speedX;
  posY = posY + speedY;


  // New code for staying on the canvas
  if (posX > width-20) {    // the object has moved off the canvas to the right
      speedX = -speedX;
  }
  if (posX < 0+20) {    // the object has moved off the canvas to the left
      speedX = -speedX;
  }
  if (posY > height-20) {    // the object has moved off the canvas to the bottom
      speedY = -speedY;
  }
  if (posY < 0+20) {    // the object has moved off the canvas to the top
      speedY = -speedY;
  }

  fill(170);
  rect(posX2+rect2, posY2+rect2, size, size);
  posX2 = posX2 + speedX2;
  posY2 = posY2 + speedY2;

  // New code for staying on the canvas
  if (posX2 > width-rect2-20) {    // the object has moved off the canvas to the right
      speedX2 = -speedX2;
  }
  if (posX2 < 0) {    // the object has moved off the canvas to the left
      speedX2 = -speedX2;
  }
  if (posY2 > height-rect2-20) {    // the object has moved off the canvas to the bottom
      speedY2 = -speedY2;
  }
  if (posY2 < 0) {    // the object has moved off the canvas to the top
      speedY2 = -speedY2;
  }

  if (dist(posX,posY,posX2,posY2) < size/2 + size/2) { //bounce off each other?
    background(0);
  }
}
