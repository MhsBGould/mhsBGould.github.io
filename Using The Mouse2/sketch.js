/* Mouse following using automatic function calls.
Brady Gould*/
  let size = 50;

function setup() {
  var firstCanvas = createCanvas(600, 600);  // create a square window for drawing
}

function draw() {
  // Resets the size after it reaches 600
  if (size > 600) {
    size = 10;
  }
}

function mouseMoved() {
  // This function is called whenever the mouse is moved
    background(127);
  rect(mouseX, mouseY, size, size); // Draw a rectangle

}

function mouseClicked() { //click mouse to make the rectangle bigger
  size = size+10
}

function mouseWheel() { //spin wheel while mouse is moving to change color
    fill(random(255), random(255), random(255));
}

