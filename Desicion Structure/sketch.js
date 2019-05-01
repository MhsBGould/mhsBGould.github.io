//Global variable
var x=1280;
var y=700;
var bg;
var hero;
var bubble;
var myFont;
var level = 0;

function preload(){
   bg = loadImage('8bit.png');
   hero = loadImage('man.png')
   bubble = loadImage('bubble.png')
   myFont = loadFont('eight-bit-dragon.otf')
}

function setup() {
  // put setup code here
  createCanvas(x,y);//canvas
  background(bg);//background image
}

function draw() {
  // put drawing code here
  /*------------------START------------------------*/
  if (level===0) {
    textSize(50);
    textFont(myFont)//text font
    text('PRESS ENTER TO START',x/4,y/2)  //Makes text appear
  }
    if (keyIsDown(ENTER)){
      level+=1;
    }

  /*------------------INSTRUCTIONS------------------------*/
   if (level===1) {
    background(bg);
    image(hero,x/7,y/1.5);
    image(bubble,x/-70,y/6);
    textSize(25);
    textFont(myFont)//text font
    text('Welcome to the game',x/3.8,y/2.3)//Make text appear
    text('press ENTER to start your own adventure',x/7,y/2.1)   //Makes text appear
  }

  /*------------------GAME------------------------*/
function keyTyped() {
  if (level === 2)


  }
}
