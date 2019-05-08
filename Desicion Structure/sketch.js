//Global variable
  var x=1280;
  var y=700;
  var posX=0+x/100;
  var posX2=550;
  var posX3=100;
//Backgrounds
  var bg;
  var bgHome;
  var bgHouse;
  var bgocean;
  var bgBridge;
  var bgWin;
//Character Variables
  var bubble;
  var hero;
  var heroSize=200;
  var dwarf;
//Object Variables
  var circle;
  var textbox;
  var door;
  var house;
  var arrow;
  var arrow2;
  var scroll;
//Other
  var myFont;
//Levels
  var level = 0;
  var tutorial1;

function preload(){
  //Load Images
   bg = loadImage('8bit.png');
   bgCave = loadImage('cave.png')
   assistant = loadImage('man.png')
   bubble = loadImage('bubble.png')
   myFont = loadFont('eight-bit-dragon.otf')
   hero = loadImage('hero.gif')
   circle = loadImage('circle.png')
   textbox = loadImage('textbox.png')
   door = loadImage('door1.png')
   arrow = loadImage('arrow.png')
   arrow2 = loadImage('arrow2.png')
   bgHome = loadImage('homebackground.png')
   house = loadImage('house.png')
   bgHouse = loadImage('kitchen.png')
   button = loadImage('choice.png')
   bgOcean = loadImage('ocean.png')
   bgBridge = loadImage('bridge.png')
   bgWin = loadImage('win.png')
   scroll = loadImage('scroll.png')
}

function setup() {
  // put setup code here
  createCanvas(x,y);//canvas
  background(bg);//background image
  textFont(myFont);//Font
  textSize(20);
}

function keyTyped() {
  //If key is typed do [THIS] action
  if (keyCode === ENTER &&(level===0 || level===1 || level===2 || level===5 || level===8 || level===12 || level===13 || level===15 || level===17 || level===18)) {
    level+=1;
    }
  if (key === 'w' &&(level===3)){
    level = 4;
  }
  if (keyCode === ENTER &&(level===tutorial1)){
    level = 5;
  }
  if (key === 'w' &&(level===5)){
    level = 7;
  }
  if (key === 's' &&(level===7)){
    level = 6;
  }
  if (key === 'a' &&(level===9)){
    level = 11;
  }
  if (key === 's' &&(level===9)){
    level = 10;
  }
  if (key === 'd' &&(level===9)){
    level = 12;
  }
  if (keyCode === 32 &&(level===14 || level===16)){
    level = 9;
  }
  if (keyCode === ENTER &&(level===10)){
    level = 15;
  }
  if (keyCode === ENTER &&(level===11)){
    level = 17;
  }
  if (keyCode === 32 &&(level===19)){
    level = 20;
  }
  if (keyCode === ENTER &&(level===20)){
    level = 21;
  }
  if (keyCode === 32 &&(level===21)){
    level = 0;
  }
}

function draw() {
  // put drawing code here
  /*------------------START------------------------*/
  if (level===0) {
    background(bg);
    textSize(50);
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
     image(hero,x/2-120,y/2+90,heroSize,heroSize);
     text('W',x/2.09,y/1.5)

   }
    /*------------------Tutorial/Start------------------------*/
    if (level===4){
      background(bg);
      image(door,x/1.5,y/1.9,325,325);
      image(circle,0+x/60,0+y/40,140,140);//Baclground of assistant
      image(hero,posX,y/2+90,heroSize,heroSize);
      image(assistant,0+x/30,0+y/20,100,100);
      image(textbox,0+x/10,0+y/-55);
      textSize(20);
      text('Lets get started,',x/3.8,y/10);
      text('Press the RIGHT ARROW to move and move to',x/6.5,y/7.5);
      text('the door to your right',x/4.1,y/6);

      if (keyIsDown(RIGHT_ARROW)) {
        posX+=10
      }

      if(posX > x/1.5){
        level = tutorial1;
      }
    }
      /*------------------Tutorial 1------------------------*/
    if (level===tutorial1){
      background(bgHome);
      image(house,x/4.5,y/5,366/1.2,309/1.2);
      image(hero, posX2,y/1.45,heroSize,heroSize);
      image(circle,0+x/60,0+y/40,140,140);//Background of assistant
      image(assistant,0+x/30,0+y/20,100,100);
      image(textbox,0+x/10,0+y/-55);
      text('Welcome to your home,',x/4,y/10);
      text('this is your actual start to your journey,',x/6.1,y/7.5);
      text('From here you choose, PRESS ENTER',x/5.3,y/6);
  }
  if (level===5){
    background(bgHome);
    image(house,x/4.5,y/5,366/1.2,309/1.2);
    image(hero, posX2,y/1.45,heroSize,heroSize);
    image(circle,0+x/60,0+y/40,140,140);//Baclground of assistant
    image(assistant,0+x/30,0+y/20,100,100);
    image(textbox,0+x/10,0+y/-55);
    text('Your home shows your current progress,',x/6.1,y/10);
    text('PRESS W to enter your home,',x/4.5,y/7.5);
    text('if not, continue by PRESSING ENTER',x/5.3,y/6);
}
  /*------------------Tutorial 2------------------------*/
if (level===6){
  background(bgHome);
  image(house,x/4.5,y/5,366/1.2,309/1.2);
  image(arrow,x/1.4,y/1.3,530/5,270/5);
  image(hero, posX2,y/1.45,heroSize,heroSize);
  image(circle,0+x/60,0+y/40,140,140);//Baclground of assistant
  image(assistant,0+x/30,0+y/20,100,100);
  image(textbox,0+x/10,0+y/-55);
  text('This is your first desicion,',x/4.6,y/10);
  text('Press the RIGHT or LEFT ARROW to move,',x/5.8,y/7.5);
  text('move past one of the arrows to advance',x/6,y/6);

  if (keyIsDown(RIGHT_ARROW)) {
    posX2+=5
  }
  if (keyIsDown(LEFT_ARROW)) {
    posX2-=5
  }

  if(keyIsDown(LEFT_ARROW) &&(posX2 < 200)){
    posX2+=5;
}
  if(posX2 > 1080-192){
    level = 8;
    }
  }
    /*------------------Home/Tutorial------------------------*/
    if (level===7){
      background(bgHouse);
      image(hero, posX3,y/2,heroSize*1.8,heroSize*1.8);
      image(circle,0+x/60,0+y/40,140,140);//Background of assistant
      image(assistant,0+x/30,0+y/20,100,100);
      image(textbox,0+x/10,0+y/-55);
      text('This is the inside of your house,',x/4.8,y/10);
      text('You will be able to visit your home',x/5,y/7.5);
      text('later in the game, PRESS S to leave',x/5.1,y/6);

        if (keyIsDown(RIGHT_ARROW)) {
          posX3+=7;
        }
        if (keyIsDown(LEFT_ARROW)){
          posX3-=7;
        }
        if (keyIsDown(RIGHT_ARROW) &&(posX3 > x-heroSize*1.8)){
          posX3-=7;
        }
        if (keyIsDown(LEFT_ARROW) &&(posX3 < 100)){
          posX3+=7;
        }
      }
      /*------------------Quiz Levels------------------------*/
      if (level===8){
        background(bgHome);
        image(hero,200,y/1.45,heroSize,heroSize);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        image(textbox,0+x/10,0+y/-55);
        text('You have come to a decision,',x/4.4,y/10);
        text('Press the cooresponding key to answer,',x/5.8,y/7.5);
        text('If stil alive, then move on, PRESS ENTER',x/5.6,y/6);
      }
      if (level===9){
        background(bgHome);
        image(hero,200,y/1.45,heroSize,heroSize);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        image(textbox,0+x/10,0+y/-55);
        image(button,x/1.5,100);
        image(button,x/1.5,300);
        image(button,x/1.5,500);
        textSize(20);
        text('You walked 1km past your house,',x/4.8,y/10);
        text('You see a bridge, mountain and an ocean',x/5.8,y/7.5);
        text('Which one will you travel too?',x/4.6,y/6);
        textSize(45);
        text('Mountain',x/1.41,190);//A
        text('Bridge',x/1.36,390);//S
        text('Ocean',x/1.36,590);//D
        text('A',x/1.05,190);//10 is the cooresponding level
        text('S',x/1.05,390);//11 is the cooresponding level
        text('D',x/1.05,590);//12 is the cooresponding level
        textSize(20);
      }
      if (level===10){
        background(bgBridge);
        image(textbox,0+x/10,0+y/-55);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        text('You chose BRIDGE,',x/4,y/10);
        text('You spot a train in the distance,',x/5.3,y/7.5);
        text('you walk along the railway, PRESS ENTER',x/5.8,y/6);
      }
      if (level===11){
        background(bgWin);
        image(textbox,0+x/10,0+y/-55);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        text('You chose MOUNTAINS,',x/4.3,y/10);
        text('You attempt to climb the mountain,',x/5.3,y/7.5);
        text('you get quite a ways up, PRESS ENTER',x/5.8,y/6);
      }
      if (level===12){
        background(bgOcean);
        image(textbox,0+x/10,0+y/-55);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        text('You chose OCEAN,',x/4,y/10);
        text('You spot rocky islands in the distance,',x/5.8,y/7.5);
        text('you try to swim to them, PRESS ENTER',x/5.8,y/6);

      }
      if (level===13){
        background(bgOcean);
        image(textbox,0+x/10,0+y/-55);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        text('You forget that you not a',x/4.4,y/10);
        text('great swimmer, after struggling you',x/5.8,y/7.5);
        text('drown and sink to the ocean floor, ENTER',x/6,y/6);
      }
      if (level===14){
        background(bgOcean);
        textSize(50);
        text('YOU DIED',x/2.5,y/2);
        textSize(25)
        text('PRESS SPACEBAR TO RESTART',x/3,y/1.8)
      }
      if (level===15){
        background(bgBridge);
        image(textbox,0+x/10,0+y/-55);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        text('Saldy....,',x/3.3,y/10);
        text('You could not outrun the train and,',x/5.3,y/7.5);
        text('it flattens you, PRESS ENTER',x/4.5,y/6);
      }
      if (level===16){
        background(bgBridge);
        textSize(50);
        text('YOU DIED',x/2.5,y/2);
        textSize(25)
        text('PRESS SPACEBAR TO RESTART',x/3,y/1.8)
      }
      if (level===17){
        background(bgWin);
        image(textbox,0+x/10,0+y/-55);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        text('But you lose your balance and,',x/4.7,y/10);
        text('tumble to the bottom of the ,',x/4.9,y/7.5);
        text('mountain, PRESS ENTER',x/4.2,y/6);
      }
      if (level===18){
          background(bgWin);
          image(textbox,0+x/10,0+y/-55);
          image(circle,0+x/60,0+y/40,140,140);//Background of assistant
          image(assistant,0+x/30,0+y/20,100,100);
          text('Luckily...,',x/3.3,y/10);
          text('you barely survive and make your way,',x/5.9,y/7.5);
          text('back to your house, PRESS ENTER',x/5,y/6);
        }
        if (level===19){
          background(bgWin);
          textSize(50);
          text('YOU SURVIVED',x/3,y/2);
          textSize(25)
          text('PRESS SPACEBAR TO VIEW YOUR PRIZE',x/3.5,y/1.8)
        }
        if (level===20){
        background(bgHouse);
        image(hero, posX3,y/2,heroSize*1.8,heroSize*1.8);
        image(circle,0+x/60,0+y/40,140,140);//Background of assistant
        image(assistant,0+x/30,0+y/20,100,100);
        image(textbox,0+x/10,0+y/-55);
        image(scroll,x/1.95,y/2.93,150*2,100*2)
        textSize(20)
        text('You picked up a pretty hefty,',x/4.8,y/10);
        text('hospital bill as your prize',x/4.3,y/7.5);
        text('Press ENTER to advance',x/4.5,y/6);

          if (keyIsDown(RIGHT_ARROW)) {
            posX3+=7;
          }
          if (keyIsDown(LEFT_ARROW)){
            posX3-=7;
          }
          if (keyIsDown(RIGHT_ARROW) &&(posX3 > x-heroSize*1.8)){
            posX3-=7;
          }
          if (keyIsDown(LEFT_ARROW) &&(posX3 < 100)){
            posX3+=7;
          }
        }
        if (level===21){
          background(bgHouse);
          textSize(50);
          text('THANKS FOR PLAYING',x/3.5,y/2);
          textSize(25)
          text('PRESS SPACEBAR TO RESTART',x/2.7,y/1.8)
        }
      print(level);
  }
