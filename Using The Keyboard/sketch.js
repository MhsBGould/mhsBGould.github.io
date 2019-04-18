//Global Variables
let x = 200;;
let y = 200;

function setup() {
  // put setup code here
  createCanvas(1000,600)
}


function draw() {
    background(127);
  //Lines attached to square
  line(x-25,y-25,500,50);
  line(x-25,y+25,500,50);
  line(x+25,y-25,500,50);
  line(x+25,y+25,500,50);

  //square
  rectMode(CENTER)
  rect(x,y,50,50);

  //Movement
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
      fill(random(0,255),0,0);
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
      fill(0,random(0,255),0);
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
    fill(0,0,random(0,255));
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
    fill(random(0,255));
  }

}
