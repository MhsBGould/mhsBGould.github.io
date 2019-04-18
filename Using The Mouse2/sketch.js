/* Mouse following using built-in variables
Brady*/
let size = 50;

function setup() {
  var secondCanvas = createCanvas(600, 600);  // create a square window for drawing
}

function draw() {
  line(mouseX, mouseY, 20, 20); // Draw a line
  rectMode(CENTER)
  rect(mouseX, mouseY,size,size);
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
