//Global variable
var x=1280;
var y=700;
var bg;
var yoshi;
var textSize;

function preload(){
   bg = loadImage('8bit.png');
   yoshi = loadImage('yoshi.png')
}

function setup() {
  // put setup code here
  createCanvas(x,y);//canvas
}

function draw() {
  // put drawing code here
  background(bg);//background image
  textSize(50);//text size
  textFont('Georgia')//text font
  text('PRESS W TO START',x/3.4,y/2)  //Makes text appear
}

function keyTyped() {
  if (key === 'w') {
    textSize = 0;
    image(yoshi, x/4, y/1.2);
  }
}
