/* Mouse following using built-in variables
Brady*/

//Variable for sizr
let size = 50;

function setup() {
  var secondCanvas = createCanvas(600, 600);  // create a square window for drawing
}

function draw() {
  //Draw line and rectangle
  line(mouseX, mouseY, 20, 20); // Draw a line with one point that does not move
  rectMode(CENTER)
  rect(mouseX, mouseY,size,size);\
  
  if (mouseIsPressed) {
    // When the mouse button is pressed
    // change the colour randomly
    fill(random(255), random(255), random(255));
    size = size+2;
  }
  if (size > 100){//reset after the size reaches 100
    size = 10;
  }
}
