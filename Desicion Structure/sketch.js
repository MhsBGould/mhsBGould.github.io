//Global variable
var x=1280;
var y=700;
var posX=0+x/100;
var posX2=640;
var bg;
var bgCave;
  //Character Variables
  var hero;
  var bubble;
  var skeleton;
  var dwarf;
  //Object Variables
  var circle;
  var textbox;
  var door;
//Other
var myFont;
  //Levels
  var level = 0;

function preload(){
   bg = loadImage('8bit.png');
   bgCave = loadImage('cave.png')
   assistant = loadImage('man.png')
   bubble = loadImage('bubble.png')
   myFont = loadFont('eight-bit-dragon.otf')
   skeleton = loadImage('bot.gif')
   circle = loadImage('circle.png')
   textbox = loadImage('textbox.png')
   door = loadImage('door.png')
}

function setup() {
  // put setup code here
  createCanvas(x,y);//canvas
  background(bg);//background image
}

function keyTyped() {
    if (keyCode === ENTER) {
      level+=1;
    }
  if (key === 'w'){
  level = 4;
  }
}

function draw() {
  // put drawing code here
  /*------------------START------------------------*/
  if (level===0) {
    textSize(50);
    textFont(myFont)//text font
    text('PRESS ENTER TO START',x/4.05,y/2)  //Makes text appear
  }

  /*------------------INSTRUCTIONS------------------------*/
   if (level===1) {
    background(bg);
    image(assistant,x/7,y/1.5);
    image(bubble,x/-70,y/6);
    textSize(25);
    textFont(myFont)//text font
    text('Welcome to the game',x/3.8,y/2.3)//Make text appear
    text('I will be your personal assistant,',x/5,y/2.08)//Make text appear
    text('press ENTER to start your own adventure',x/7,y/1.9)   //Makes text appear
    }
  /*------------------Instructions Part 2------------------------*/
   if (level===2) {
     background(bg);
     image(assistant,x/7,y/1.5);
     image(bubble,x/-70,y/6);
     text('First off, choose your character',x/5,y/2.3)//Make text appear
     text('by pressing the corresponding button,',x/5.8,y/2.08)//Make text appear
     text('Press ENTER to view the selection given ',x/5.8,y/1.9)   //Makes text appear
   }
   /*------------------Character Selection------------------------*/
   if (level===3) {
     background(bg);
     image(skeleton,x/2-120,y/2+90);
     text('W', x/2.09,y/1.5)
     if(keyCode === ENTER){
       level+=0
     }

   }
    /*------------------Tutorial/Start------------------------*/
    if (level===4){
      background(bg);
      image(door,x/1.5,y/1.87,300,300);
      image(circle,0+x/60,0+y/40,140,140);//Baclground of assistant
      image(skeleton,posX,y/2+90);
      image(assistant,0+x/30,0+y/20,100,100);
      image(textbox,0+x/10,0+y/-55);
      textSize(20);
      text('Lets get started,',x/3.8,y/10);
      text('Press the RIGHT ARROW to move and move to',x/6.5,y/7.5);
      text('the door to your right',x/4.1,y/6);

      if (keyIsDown(RIGHT_ARROW)) {
        posX+=5
      }

      if(posX > x/1.5){
        level+=1;
      }
    }
    if (level===5){
      background(bgCave);
      image(skeleton, posX2,y/1.34);

      if (keyIsDown(RIGHT_ARROW)) {
        posX2+=5
      }
      if (keyIsDown(LEFT_ARROW)) {
        posX2-=5
      }

      if(posX2 < 200){
        background(0);
    }
      if(posX2 > 1080){
        background(0);
    }
  }
}
