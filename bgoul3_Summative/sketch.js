//Set criteria for player size and position
let x = 100;
let y = 750;
let size = 50;
let x2 = 20;
let y2 = 15;
let x3 = 35;
let y3 = 15;
let x4 = 20;
let y4 = 30;

//Set criteria for enemy position
let xE = 700;
let xEtwo = 350;

//Sliding enemies (lEVEL 5)
let xEthree = 250;
let yEthree = 425;
let pyEthree = 1; //Order of movement
let xEfour = 1000;
let yEfour = 200;
let pyEfour = 1; //Order of movement
let eSpeed4 = 10;

let xE5 = 550;
let xE6 = 200;
let xE1 = 20;
let xE2 = 35;
let xE3 = 20;
let xE1two = 20;
let xE2two = 35;
let xE3two = 20;
let posE = true;
let posEtwo = true;
let posEthree = true;
let posEfour = true;
let eSpeed = 5;
let eSpeed2 = 4;
let eSpeed3 = 8;

//Variables for boss projectile
let pro1 = 950;
let proY = 930;
let pro = true;
let proSpeed = 25;

//Variables for moving PLATFORM
let platx = 50;
let platSpeed = 6;
let platPos = true;

let platx1 = 250;
let platSpeed1 = 10;
let platPos1 = true;

//Level cube position
let xL = 50;
let yL = 25;

//Color of levels on level 4
let c1 =150;
let c2 =150;
let c3 =150;
let c4 =150;
let c5 =150;
let c6 =150;

//Set criteria for jumping
let dy = 0;
let gravity = 0;
let jump = false;  //Check to see if they are ALREADY jumping
let level = 0; // Set level
let xSpeed = 5; //Set criteria for movement
let life = 3;

//Variables for keys
let k1 = false;
let k2 = false;
let k3 = false;
let k4 = false;
let k5 = false;

//Coordinates (Lava Bubbles)
let yL1 = 770;
let xL1 = 450;
let xS1 = 1;
let xS2 = 3;
let yS1 = 11;
let yS2 = 20;
let s = 150;
//Order of the animation(Lava Bubbles)
let pyL1 = 1;
//Speed (lava Bubbles)
let y1Lspeed = 2;
let x1Lspeed = 1;

//Moving PLATFORM
let yP = 600;

function preload(){
  //Load Font/Images
   myFont = loadFont('eight-bit-dragon.otf')
} //Load font

function setup() {
  // put setup code here
  createCanvas(1200,800)
} //Create Canvas

function keyPressed() {
  //If key is typed do [THIS] action
  if (keyCode === 82) {
    level = 4;
  }
  if (keyCode === 32 &&(level===6)) {
    level = 0;
    life = 3;
    k1 = false;
    k2 = false;
    k3 = false;
    k4 = false;
    k5 = false;
    y = 25;
  }
  if (keyCode === 32 &&(level===11)) {
    level = 8;
    life = 3;
    x = 1000;
    y = 650;
  }
  if (keyCode === 32 &&(level===12)) {
    level = 9;
    life = 3;
    x = 100;
    y = 725;
  }

  if (keyCode === ENTER &&(level===0)) {
    level = 4;
  }

  else if (keyCode === ENTER &&(level===4 || level===10)) {
    if (yL === 25) {
      level = 1;
      y = 650;
      x = 575;
    }
    else if (yL === 75) {
      level = 2;
      y = 650;
      x = 575;
    }
    else if (yL === 125) {
      level = 3;
      y = 650;
      x = 575;
    }
    else if (yL === 175) {
      level = 5;
      y = 650
      x = 575;
    }
    else if (yL === 225) {
      x = 1000;
      y = 650
      level = 7;
    }
    else if (yL === 275) {
      x = 1000;
      y = 650
      level = 8;
    }
  }

  //Move Cube on level screen
  if (keyCode === 40 &&(level===4)&& yL<225) {
    yL += 50;
  }
  if (keyCode === 40 &&(level===10)&& yL<275) {
    yL += 50;
  }
  if (keyCode === 38 &&(level==4 || level===10)&& yL>25){
    yL -= 50;
  }

} //If Key pressed do this action

function draw() {

  if (level===6) {
    background(200)
    drawFloor();
    textFont(myFont);
    textSize(75)
    strokeWeight(4)
    stroke(150);
    fill(255,100,100);
    text('GAME OVER',400,300)
    textSize(20)
    strokeWeight(2);
    text('Press SPACE to re-start',473,350)
} //Death Screen

if (level===11) {
  background(200)
  drawFloor();
  textFont(myFont);
  textSize(75)
  strokeWeight(4)
  stroke(150);
  fill(255,100,100);
  text('GAME OVER',400,300)
  textSize(20)
  strokeWeight(2);
  text('Press SPACE for a second chance',425,350)
} //Death Screen for FINAL LEVEL

if (level===12) {
  background(200)
  drawFloor();
  textFont(myFont);
  textSize(75)
  strokeWeight(4)
  stroke(150);
  fill(255,100,100);
  text('GAME OVER',400,300)
  textSize(20)
  strokeWeight(2);
  text('Press SPACE for a second chance',425,350)
} //Death Screen for FINAL LEVEL pt.2

if (level===13) {
  background(200)
  drawFloor();
  textFont(myFont);
  textSize(75)
  strokeWeight(4)
  stroke(150);
  fill(1, 173, 18);
  text('YOU WIN',425,300)
  textSize(20)
  strokeWeight(2);
  text('Refresh page to RESTART',435,350)
} //WIN SCREEN

  if (level === 0){
    background(200);
    drawFloor();
    textFont(myFont);
    textSize(75)
    text('CUBE',500,300)
    textSize(20)
    text('Press ENTER to start',475,350)
} //Start Screen

  if (level === 4){
    background(200);
    drawFloor();
    drawKey();

    //Coordinates for cube and level labels
    let size = 25;

    //Create cube
    noStroke();
    fill(255,25,100);
    rect(xL,yL,size,size);
    fill(255,75,100);
    rect(xL+2.5,yL+2.5,size/1.25,size/1.25)
    fill(150);
    rect(xL+10,yL+7,size/10,size/10)
    rect(xL+18,yL+7,size/10,size/10)
    rect(xL+10,yL+15,size/2.4,size/10)

    if (k1===true &&k2===true &&k3===true &&k4===true &&k5===true) {
      level = 10;
    }

// Makes the level selection different colors
  if (yL === 25){
    c1 = 230;
  }
  else if (yL<25 || yL>25) {
    c1 = 150;
  }
  if (yL === 75){
    c2 = 230;
  }
  else if (yL<75 || yL>75) {
    c2 = 150;
  }
  if (yL === 125){
    c3 = 230;
  }
  else if (yL<125 || yL>125) {
    c3 = 150;
  }
  if (yL === 175){
    c4 = 230;
  }
  else if (yL<175 || yL>175) {
    c4 = 150;
  }
  if (yL === 225){
    c5 = 230;
  }
  else if (yL<225 || yL>225) {
    c5 = 150;
  }

    //Create labels for level
    textFont(myFont);
    textSize(25)
    fill(c1);
    text('Level 1: Reach the Key (Tutorial)',100,50)
    fill(c2);
    text('Level 2: Reach the Key (Parkour)',100,100)
    fill(c3);
    text('Level 3: Reach the Key (Enemy)',100,150)
    fill(c4);
    text('Level 4: Reach the Key (Enemy x2)',100,200)
    fill(c5);
    text('Level 5: Reach the Key (Enemy & Teleport)',100,250)

    //Instructions
    fill(150);
    stroke(25);
    strokeWeight(1);
    textSize(30);
    text('Use UP and DOWN arrow to swicth level selection',175,450)
    text('Press ENTER to select level',350,500)
    text('Collect all the keys to unlock final level',250,550)
    text('Press R if any glicth occurs throughout the game',150,600)


} //Level Selection Screen

  if (level === 10){
    background(200);
    drawFloor();

    //Coordinates for cube and level labels
    let size = 25;

    //Create cube
    noStroke();
    fill(255,25,100);
    rect(xL,yL,size,size);
    fill(255,75,100);
    rect(xL+2.5,yL+2.5,size/1.25,size/1.25)
    fill(150);
    rect(xL+10,yL+7,size/10,size/10)
    rect(xL+18,yL+7,size/10,size/10)
    rect(xL+10,yL+15,size/2.4,size/10)

    // Makes the level selection different colors
    if (yL === 25){
      c1 = 230;
    }
    else if (yL<25 || yL>25) {
      c1 = 150;
    }
    if (yL === 75){
      c2 = 230;
    }
    else if (yL<75 || yL>75) {
      c2  = 150;
    }
    if (yL === 125){
      c3 = 230;
    }
    else if (yL<125 || yL>125) {
      c3 = 150;
    }
    if (yL === 175){
      c4 = 230;
    }
    else if (yL<175 || yL>175) {
      c4 = 150;
    }
    if (yL === 225){
      c5 = 230;
    }
    else if (yL<225 || yL>225) {
      c5 = 150;
    }
    if (yL === 275){
      c6 = 230;
    }
    else if (yL<275 || yL>275) {
      c6= 125;
    }

  //Create labels for level
  textFont(myFont);
  textSize(25)
  fill(c1);
  text('Level 1: Reach the Key (Tutorial)',100,50)
  fill(c2);
  text('Level 2: Reach the Key (Parkour)',100,100)
  fill(c3);
  text('Level 3: Reach the Key (Enemy)',100,150)
  fill(c4);
  text('Level 4: Reach the Key (Enemy x2)',100,200)
  fill(c5);
  text('Level 5: Reach the Key (Enemy & Teleport)',100,250)
  fill(c6);
  text('Level 6: Final Level',100,300)

} //Level Selection Screen when keys unlocked

  if (level === 1){
    background(200); // Background color
    drawMain(x,y,size) // Create main character
    drawKey();
    drawFloor();
    drawPlatform();
    strokeWeight(0);
    fill(200);
    textFont(myFont);
    textSize(20)
    text('Reach the Key',50,725);
    text('Use LEFT and RIGHT arrow to move',50,750);
    text('Use UP arrow and SPACEBAR to jump',50,775);
    y-=dy; //Move object in the air (if jumping)
    dy -= gravity; //Apply gravity (if jumping)

     //Amount of lives the player has left
    if (life===3 || life===2 || life===1) {
      drawLife();
    }
    //Check to see if object hit the ground
    if (y>650) {
      y = 650;
      gravity = 0;
      dy = 0;
      jump = false;
    }
    //Stop object once hit bottom of platform
    if (y<= 525 && y>=500 &&x>350 &&x<800){
      y = 525;
      gravity = 1;
     }
     //Stop object if hit the sides of the platform
    if (x>=799 &&x<=805 && y<=524 && y>=451) {
      x = 805;
      }
    if (x<= 351 &&x>=345 && y<=524 && y>=451) {
      x = 345;
    }
     //Stop object once hit top of platform
    if (y>= 450 && y<=460 &&x>350 &&x<800){
      y = 450;
      gravity = 0;
      dy = 0;
      jump = false;
     }
     //If object leaves platform, apply gravity
     if (y>= 450 && y<=460 &&x<350){
       gravity = 0.5;
       jump = true;
      }
     if (y>= 450 && y<=460 &&x>800){
       gravity = 0.5;
       jump = true;
     }
     //Change level when key is found
     if (y>=275 &&y<=325 &&x>=562 &&x<=610){
       level = 4;
       k1 = true;
     }

    //Player x movement
    if (keyIsDown(LEFT_ARROW)) {
      x-=xSpeed;
      x2 = 10;
      x3 = 25;
      x4 = 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x+=xSpeed;
      x2 = 20;
      x3 = 35;
      x4 = 20;
    }

    if (x < 0) {
      x+=xSpeed
    }

    if (x >= 1151) {
      x-=xSpeed
    }

    if (keyIsDown(32) || keyIsDown(38)) {
      if (jump === false) {
        jump = true;
        dy=15; //When jumping change the y value by 15 pixels
        gravity = 0.5;
      }
    }
  } //LEVEL 1

  if (level === 2){
     background(200); // Background color
     drawMain(x,y,size) // Create main character
     drawKey();
     drawFloor();
     drawPlatform();
     strokeWeight(0);
     fill(200);
     textFont(myFont);
     textSize(20)
     text('Reach the Key',50,725);
     text('Jump from platform to platform',50,750);
     text('The sides of the platform are trouble',50,775);
     y-=dy; //Move object in the air (if jumping)
     dy -= gravity; //Apply gravity (if jumping)

     //Amount of lives the player has left
     if (life===3 || life===2 || life===1) {
       drawLife();
     }
     //Check to see if object hit the ground
     if (y>650) {
       y = 650;
       gravity = 0;
       dy = 0;
       jump = false;
     }
     //Stop object once hit bottom of platform
     if (y<= 500 && y>=490 &&x>50 &&x<500){
       y = 500;
       gravity = 1;
      }
      //Stop object if hit the sides of the platform
     if (x>=499 &&x<=505 && y<=499 &&y>=424) {
       x = 505;
       gravity = 0.7
       }
     if (x<= 51 &&x>=45 && y<=499 && y>=424) {
       x = 45;
       gravity = 0.7
     }
      //Stop object once hit top of platform
     if (y>= 425 && y<=435 &&x>50 &&x<500){
       y = 425;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      //Stop object if hit the sides of the 2nd platform
     if (x>= 1099 &&x<=1105 && y<=250 &&y>=201) {
       x = 1105;
       gravity = 0.7
       }
     if (x<= 651 &&x>=645 && y<=250 && y>=201) {
       x = 645;
       gravity = 0.7
     }
      //If object leaves platform, apply gravity
      if (y>= 425 && y<=435 &&x<50){
        gravity = 0.5;
        jump = true;
       }
      if (y>= 425 && y<=435 &&x>500){
        gravity = 0.5;
        jump = true;
      }
      //Stop object once hit top of 2nd platform
     if (y>= 200 && y<=215 &&x>650 &&x<1100){
       y = 200;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      //If object leaves 2nd platform, apply gravity
      if (y>= 200 && y<=215 &&x<650){
        gravity = 0.5;
        jump = true;
       }
      if (y>= 200 && y<=215 &&x>1100){
        gravity = 0.5;
        jump = true;
      }
      //Don't let object go past upper screen
      if (y<=0) {
        y = 0;
        gravity = 0.7;
      }
      //Change level when key is found
      if (y>=275 &&y<=325 &&x>=1100 &&x<=1150){
        level = 4;
        k2 = true;
      }

     //Player x movement
     if (keyIsDown(LEFT_ARROW)) {
       x-=xSpeed;
       x2 = 10;
       x3 = 25;
       x4 = 10;
     }
     if (keyIsDown(RIGHT_ARROW)) {
       x+=xSpeed;
       x2 = 20;
       x3 = 35;
       x4 = 20;
     }

     if (x < 0) {
       x+=xSpeed
     }

     if (x >= 1151) {
       x-=xSpeed
     }

     if (keyIsDown(32) || keyIsDown(38)) {
       if (jump === false) {
         jump = true;
         dy=15; //When jumping change the y value by 15 pixels
         gravity = 0.5;
       }
     }
   } //LEVEL 2

  if (level===3) {
     background(200); // Background color
     drawMain(x,y,size) // Create main character
     drawFloor();
     drawPlatform();
     drawEnemy();
     drawKey();
     strokeWeight(0);
     fill(200);
     textSize(20);
     text('Reach the Key',50,725);
     text('Jump from platform to platform',50,750);
     text('Watch out for the green enemy',50,775);
     y-=dy; //Move object in the air (if jumping)
     dy -= gravity; //Apply gravity (if jumping)

     //Amount of lives the player has left
    if (life===3 || life===2 || life===1) {
      drawLife();
    }
    if (life===0) {
      level = 6;
    }

     //Check to see if object hit the ground
     if (y>650) {
       y = 650;
       gravity = 0;
       dy = 0;
       jump = false;
     }

     //Stop object once hit bottom of platform
     if (y<= 500 && y>=490 &&x>50 &&x<500){
       y = 500;
       gravity = 1;
      }
      //Stop object if hit the sides of the platform
     if (x>=499 &&x<=505 && y<=499 &&y>=424) {
       x = 505;
       gravity = 0.7
       }
     if (x<= 51 &&x>=45 && y<=499 && y>=424) {
       x = 45;
       gravity = 0.7
     }
      //Stop object once hit top of platform
     if (y>= 425 && y<=435 &&x>50 &&x<500){
       y = 425;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      //Stop object if hit the sides of the 2nd platform
     if (x>= 1099 &&x<=1105 && y<=250 &&y>=201) {
       x = 1105;
       gravity = 0.7
       }
     if (x<= 651 &&x>=645 && y<=250 && y>=201) {
       x = 645;
       gravity = 0.7
     }
      //If object leaves platform, apply gravity
      if (y>= 425 && y<=435 &&x<50){
        gravity = 0.5;
        jump = true;
       }
      if (y>= 425 && y<=435 &&x>500){
        gravity = 0.5;
        jump = true;
      }
      //Stop object once hit top of 2nd platform
     if (y>= 200 && y<=215 &&x>650 &&x<1100){
       y = 200;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      //If object leaves 2nd platform, apply gravity
      if (y>= 200 && y<=215 &&x<650){
        gravity = 0.5;
        jump = true;
       }
      if (y>= 200 && y<=215 &&x>1100){
        gravity = 0.5;
        jump = true;
      }
      //Don't let object go past upper screen
      if (y<=0) {
        y = 0;
        gravity = 0.7;
      }
      //Kill cube when enemy is hit
      if (x>=xE-50 &&x<=xE+55 &&y>=150 &&y<=200) {
        life-=1;
        x = 575;
        y = 650;
      }
      //Change level when key is found
      if (y>=70 &&y<=120 &&x>=450 &&x<=500){
        level = 4;
        k3 = true;
      }

      //Enemy movement
      if (xE<=699 &&posE===false) {
        posE = true;
      }
      if (posE===true){
        xE+=eSpeed
        xE1 = 20;
        xE2 = 35;
        xE3 = 20;
      }
      if (xE>=1055 &&posE===true){
        posE = false;
      }
      if (posE===false) {
        xE-=eSpeed
        xE1 = 10;
        xE2 = 25;
        xE3 = 10;
      }

     //Player x movement
     if (keyIsDown(LEFT_ARROW)) {
       x-=xSpeed;
       x2 = 10;
       x3 = 25;
       x4 = 10;
     }
     if (keyIsDown(RIGHT_ARROW)) {
       x+=xSpeed;
       x2 = 20;
       x3 = 35;
       x4 = 20;
     }

     if (x < 0) {
       x+=xSpeed
     }

     if (x >= 1151) {
       x-=xSpeed
     }

     if (keyIsDown(32) || keyIsDown(38)) {
       if (jump === false) {
         jump = true;
         dy=15; //When jumping change the y value by 15 pixels
         gravity = 0.5;
       }
     }
   } //LEVEL 3

  if (level===5) {
    background(200); // Background color
    drawMain(x,y,size) // Create main character
    drawFloor();
    drawPlatform();
    drawEnemy();
    drawKey();
    strokeWeight(0);
    fill(200);
    textSize(20);
    text('Reach the Key',50,725);
    text('Jump from platform to platform',50,750);
    text('Watch out for green enemies',50,775);
    y-=dy; //Move object in the air (if jumping)
    dy -= gravity; //Apply gravity (if jumping)

    //Amount of lives the player has left
   if (life===3 || life===2 || life===1) {
     drawLife();
   }
   if (life===0) {
     level = 6;
   }

    //Check to see if object hit the ground
    if (y>650) {
      y = 650;
      gravity = 0;
      dy = 0;
      jump = false;
    }

    //Stop object once hit bottom of platform
    if (y<= 500 && y>=490 &&x>50 &&x<500){
      y = 500;
      gravity = 1;
     }
     //Stop object if hit the sides of the platform
    if (x>=499 &&x<=505 && y<=499 &&y>=424) {
      x = 505;
      gravity = 0.7
      }
    if (x<= 51 &&x>=45 && y<=499 && y>=424) {
      x = 45;
      gravity = 0.7
    }
     //Stop object once hit top of platform
    if (y>= 425 && y<=435 &&x>50 &&x<500){
      y = 425;
      gravity = 0;
      dy = 0;
      jump = false;
     }
     //Stop object if hit the sides of the 2nd platform
    if (x>= 1099 &&x<=1105 && y<=250 &&y>=201) {
      x = 1105;
      gravity = 0.7
      }
    if (x<= 651 &&x>=645 && y<=250 && y>=201) {
      x = 645;
      gravity = 0.7
    }
     //If object leaves platform, apply gravity
     if (y>= 425 && y<=435 &&x<50){
       gravity = 0.5;
       jump = true;
      }
     if (y>= 425 && y<=435 &&x>500){
       gravity = 0.5;
       jump = true;
     }
     //Stop object once hit top of 2nd platform
    if (y>= 200 && y<=215 &&x>650 &&x<1100){
      y = 200;
      gravity = 0;
      dy = 0;
      jump = false;
     }
     //If object leaves 2nd platform, apply gravity
     if (y>= 200 && y<=215 &&x<650){
       gravity = 0.5;
       jump = true;
      }
     if (y>= 200 && y<=215 &&x>1100){
       gravity = 0.5;
       jump = true;
     }
     //Don't let object go past upper screen
     if (y<=0) {
       y = 0;
       gravity = 0.7;
     }
     //Kill cube when enemy is hit
     if (x>=xE-50 &&x<=xE+55 &&y>=150 &&y<=200) {
       life-=1;
       x = 575;
       y = 650;
     }
     if (x>=xEtwo-50 &&x<=xEtwo+55 &&y>=375 &&y<=425) {
       life-=1;
       x = 575;
       y = 650;
     }

     //Change level when key is found
     if (y>=275 &&y<=325 &&x>=1100 &&x<=1150){
       level = 4;
       k4 = true;
     }

     //Enemy movement
     if (xE<=699 &&posE===false) {
       posE = true;
     }
     if (posE===true){
       xE+=eSpeed
       xE1 = 20;
       xE2 = 35;
       xE3 = 20;
     }
     if (xE>=1055 &&posE===true){
       posE = false;
     }
     if (posE===false) {
       xE-=eSpeed
       xE1 = 10;
       xE2 = 25;
       xE3 = 10;
     }
     //Second enemy movement
     if (xEtwo<=95 &&posEtwo===false) {
       posEtwo = true;
     }
     if (posEtwo===true){
       xEtwo+=eSpeed
       xE1two = 20;
       xE2two = 35;
       xE3two = 20;
     }
     if (xEtwo>=455 &&posEtwo===true){
       posEtwo = false;
     }
     if (posEtwo===false) {
       xEtwo-=eSpeed
       xE1two = 10;
       xE2two = 25;
       xE3two = 10;
     }

    //Player x movement
    if (keyIsDown(LEFT_ARROW)) {
      x-=xSpeed;
      x2 = 10;
      x3 = 25;
      x4 = 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x+=xSpeed;
      x2 = 20;
      x3 = 35;
      x4 = 20;
    }

    if (x < 0) {
      x+=xSpeed
    }

    if (x >= 1151) {
      x-=xSpeed
    }

    if (keyIsDown(32) || keyIsDown(38)) {
      if (jump === false) {
        jump = true;
        dy=15; //When jumping change the y value by 15 pixels
        gravity = 0.5;
      }
    }
  } //LEVEL 4

  if (level===7) {
    background(200); // Background color
    drawEnemy();
    drawMain(x,y,size) // Create main character
    drawLavaBubbles();
    drawFloor();
    drawLava();
    drawKey();
    drawPlatform();
    strokeWeight(0);
    fill(200);
    textSize(20);
    textFont(myFont);
    text('Reach the Key',50,725);
    text('Move beyond the screen to teleport',50,750);
    text('Watch out for blue enemies and the lava',50,775);
    y-=dy; //Move object in the air (if jumping)
    dy -= gravity; //Apply gravity (if jumping)

    //Amount of lives the player has left
   if (life===3 || life===2 || life===1) {
     drawLife();
   }
   if (life===0) {
     level = 6;
   }

    //Check to see if object hit the ground
    if (y>650) {
      y = 650;
      gravity = 0;
      dy = 0;
      jump = false;
    }

      //Stop object once hit bottom of platform
      if (y<= 500 && y>=490 &&x>50 &&x<350){
        y = 500;
        gravity = 1;
       }
       //Stop object if hit the sides of the platform
      if (x>=349 &&x<=355 && y<=499 &&y>=424) {
        x = 355;
        gravity = 0.7
        }
      if (x<= 51 &&x>=45 && y<=499 && y>=424) {
        x = 45;
        gravity = 0.7
      }
       //Stop object once hit top of platform
      if (y>= 425 && y<=435 &&x>75 &&x<350){
        y = 425;
        gravity = 0;
        dy = 0;
        jump = false;
       }
       //If object leaves platform, apply gravity
       if (y>= 425 && y<=435 &&x<50){
         gravity = 0.5;
         jump = true;
        }
       if (y>= 425 && y<=435 &&x>350){
         gravity = 0.5;
         jump = true;
       }
       //Stop object if hit the sides of the 2nd platform
      if (x>=45 &&x<=55 && y<=499 &&y>=201) {
        x = 45;
        }
      if (x<= 125 &&x>=115 && y<=499 && y>=201) {
        x+=xSpeed;
      }
      //Stop object once hit top of 3rd platform
     if (y>= 200 && y<=215 &&x>=0-50 &&x<125){
       y = 200;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      if (y>= 200 && y<=215 &&x>=900 &&x<1200+50){
        y = 200;
        gravity = 0;
        dy = 0;
        jump = false;
       }
      //If object leaves 3rd platform, apply gravity
      if (y>= 200 && y<=215 &&x>125 &&x<300){
        gravity = 0.5;
        jump = true;
      }
      if (y>= 200 && y<=215 &&x>300 &&x<855){
        gravity = 0.5;
        jump = true;
      }
      //Stop object if hit the side of the 3rd platform
     if (x>=847 &&y<=275 &&y>=201) {
       x-=xSpeed;
     }
    //kill cube if lava touched
    if (y>=650 &&x>=350 &&x<=800) {
      life-=1;
      x = 1000;
      y = 650;
    }

    //Kill cube if enenmy touched
    if (x>=xEthree-50 &&x<=xEthree+50 &&y>=yEthree-50 &&y<=yEthree+50) {
      life-=1;
      x = 1000;
      y = 650;
    }
    if (x>=xEfour-50 && x<=xEfour+50 &&y>=yEfour-50 &&y<=yEfour+50) {
      life-=1;
      x = 1000;
      y = 650;
    }

    //Change level when key is found
    if (y>=70 &&y<=120 &&x>=650 &&x<=690){
      level = 4;
      k5 = true;
    }

     //Don't let object go past upper screen
     if (y<=0) {
       y = 0;
       gravity = 0.7;
     }
    //Player x movement
    if (keyIsDown(LEFT_ARROW)) {
      x-=xSpeed;
      x2 = 10;
      x3 = 25;
      x4 = 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x+=xSpeed;
      x2 = 20;
      x3 = 35;
      x4 = 20;
    }

    //Enemy movement
    if (pyEthree===1) {
      xEthree-=eSpeed;
    }
    if (xEthree<=125 &&pyEthree===1) {
      xEthree = 125;
      pyEthree = 2;
    }
    if (pyEthree===2) {
      yEthree-=eSpeed;
    }
    if (yEthree<=200 &&pyEthree===2) {
      yEthree = 200;
      pyEthree = 3;
    }
    if (pyEthree===3) {
      xEthree-=eSpeed;
    }
    if (xEthree<=-25 &&pyEthree===3) {
      xEthree = 1175;
    }
    if (xEthree<= 850 && xEthree>=849 &&pyEthree===3) {
      xEthree = 850;
      pyEthree = 4;
    }
    if (pyEthree===4) {
      yEthree+=eSpeed;
    }
    if (yEthree>=275 &&pyEthree===4) {
      yEthree = 275;
      pyEthree = 5;
    }
    if (pyEthree===5) {
      xEthree+=eSpeed;
    }
    if (xEthree>=1175 &&pyEthree===5) {
      xEthree = -25;
    }
    if (xEthree>=50 &&xEthree<=60 &&pyEthree===5) {
      xEthree = 50;
      pyEthree = 6;
    }
    if (pyEthree===6) {
      yEthree+=eSpeed;
    }
    if (yEthree>=500 &&pyEthree===6) {
      yEthree = 500;
      pyEthree = 7;
    }
    if (pyEthree===7) {
      xEthree+=eSpeed;
    }
    if (xEthree===350 &&pyEthree===7) {
      xEthree = 350;
      pyEthree = 8;
    }
    if (pyEthree===8) {
      yEthree-=eSpeed;
    }
    if (yEthree<=425 &&pyEthree===8) {
      yEthree = 425;
      pyEthree = 1;
    }

    //Second Enemy movement
    if (pyEfour===1) {
      xEfour+=eSpeed4;
    }
    if (xEfour>=1175 &&pyEfour===1) {
      xEfour = -25
    }
    if (xEfour>=125 &&xEfour<=130 &&pyEfour===1) {
      pyEfour = 2;
      xEfour = 125;
    }
    if (pyEfour===2) {
      yEfour+=eSpeed4;
    }
    if (yEfour>=425 &&pyEfour===2) {
      yEfour = 425;
      pyEfour = 3;
    }
    if (pyEfour===3) {
      xEfour+=eSpeed4;
    }
    if (xEfour>=350 &&pyEfour===3) {
      xEfour = 350;
      pyEfour = 4;
    }
    if (pyEfour===4) {
      yEfour+=eSpeed4;
    }
    if (yEfour>=500 &&pyEfour===4) {
      yEfour = 500;
      pyEfour = 5;
    }
    if (pyEfour===5) {
      xEfour-=eSpeed4;
    }
    if (xEfour<=50 &&pyEfour===5) {
      xEfour = 50;
      pyEfour = 6;
    }
    if (pyEfour===6) {
      yEfour-=eSpeed4;
    }
    if (yEfour<=275 &&pyEfour===6) {
      yEfour = 275;
      pyEfour = 7;
    }
    if (pyEfour===7) {
      xEfour-=eSpeed4;
    }
    if (xEfour<=-25 &&pyEfour===7) {
      xEfour = 1175;
    }
    if (xEfour<=850 &&xEfour>=845 &&pyEfour===7) {
      xEfour = 850;
      pyEfour = 8;
    }
    if (pyEfour===8) {
      yEfour-=eSpeed4;
    }
    if (yEfour<=200 &&pyEfour===8) {
      yEfour = 200;
      pyEfour = 1;
    }

    //Teleports cube across screen
    if (x >= 1175) {
      x = -25;
    }
    if (x < -25) {
      x = 1175;
    }

    if (keyIsDown(32) || keyIsDown(38)) {
      if (jump === false) {
        jump = true;
        dy=15; //When jumping change the y value by 15 pixels
        gravity = 0.5;
      }
    }
  } //LEVEL 5

  if (level===8) {
    background(200); // Background color
    drawLavaBubbles();
    drawEnemy();
    drawMain(x,y,size) // Create main character
    drawFloor();
    drawLava();
    drawKey();
    drawPlatform();
    fill(200);
    textSize(20);
    textFont(myFont);
    text('Reach the Teleporter (BLUE)',50,725);
    text('Move beyond the screen to teleport',50,750);
    text('Watch out for blue and green enemies and the lava',50,775);
    strokeWeight(0);
    fill(150);
    eSpeed4 = 10;
    y-=dy; //Move object in the air (if jumping)
    dy -= gravity; //Apply gravity (if jumping)

    //Amount of lives the player has left
   if (life===3 || life===2 || life===1) {
     drawLife();
   }
   if (life===0) {
     level = 11;
   }

    //Check to see if object hit the ground
    if (y>650) {
      y = 650;
      gravity = 0;
      dy = 0;
      jump = false;
    }
    if (y>150 &&x>=450 &&x<=800) {
      gravity = 1;
    }

    if (y>125 &&x>=520 &&x<=600) {
      y = 125
      gravity = 0;
      dy = 0;
      jump = false;
    }


      //Stop object once hit bottom of platform
      if (y<= 500 && y>=490 &&x>50 &&x<350){
        y = 500;
        gravity = 1;
       }
       //Stop object if hit the sides of the platform
      if (x>=349 &&x<=355 && y<=499 &&y>=424) {
        x = 355;
        gravity = 0.7
        }
      if (x<= 51 &&x>=45 && y<=499 && y>=424) {
        x = 45;
        gravity = 0.7
      }
       //Stop object once hit top of platform
      if (y>= 425 && y<=435 &&x>75 &&x<350){
        y = 425;
        gravity = 0;
        dy = 0;
        jump = false;
       }
       //If object leaves platform, apply gravity
       if (y>= 425 && y<=435 &&x<50){
         gravity = 0.5;
         jump = true;
        }
       if (y>= 425 && y<=435 &&x>350){
         gravity = 0.5;
         jump = true;
       }
       //Stop object if hit the sides of the 2nd platform
      if (x>=45 &&x<=55 && y<=499 &&y>=201) {
        x = 45;
        }
      if (x<= 125 &&x>=115 && y<=499 && y>=201) {
        x+=xSpeed;
      }
      //Stop object once hit top of 3rd platform
     if (y>= 200 && y<=215 &&x>=0-50 &&x<125){
       y = 200;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      if (y>= 200 && y<=215 &&x>=900 &&x<1200+50){
        y = 200;
        gravity = 0;
        dy = 0;
        jump = false;
       }
      //If object leaves 3rd platform, apply gravity
      if (y>= 200 && y<=215 &&x>125 &&x<300){
        gravity = 0.5;
        jump = true;
      }
      if (y>= 200 && y<=215 &&x>300 &&x<855){
        gravity = 0.5;
        jump = true;
      }
      //Stop object if hit the side of the 3rd platform
     if (x>=847 &&y<=275 &&y>=201) {
       x-=xSpeed;
     }

     //Stop object once hit top of 4th platform
    if (y>= 125 && y<=135 &&x>500 &&x<800){
      y = 125;
      gravity = 0;
      dy = 0;
      jump = false;
     }

     //If object leaves 4th platform, apply gravity
     if (y>=125 && y<=165 &&x>800){
       gravity = 0.5;
       jump = true;
     }
     //Stop object if hit the side of the 4th platform
    if (x<=801 && x>=785 &&y<=201 &&y>=126) {
      x+=xSpeed;
    }
     //Stop object if hit the sides of the 5th platform
    if (x<= 520 &&x>=515 && y<=125 && y>=-50) {
      x+=xSpeed;
    }
    if (x>=450 && x<=460 &&y<=600 &&y>0) {
      x = 450;
    }
    //Stop object once hit bottom of 6th platform
    if (y<= 100 &&x>556 &&x<619){
      y = 100;
      gravity = 1;
     }
     //Stop object if hit the sides of the 6th platform
    if (x>=555 &&x<=560 && y<=100 &&y>=-50) {
      x-=xSpeed;
      }
    if (x<=620 &&x>=615 && y<=100 && y>=-50) {
      x+=xSpeed;
    }

    //kill cube if lava touched
    if (y>=650 &&x>=350 &&x<=800) {
      life-=1;
      x = 1000;
      y = 650;
    }
    //Teleport cube
    if (y<=1 &&x>=525 &&x<=600) {
      y = 745;
      level = 9;
    }
     //Don't let object go past upper screen
     if (y<=0) {
       y = 0;
       gravity = 0.7;
     }
    //Player x movement
    if (keyIsDown(LEFT_ARROW)) {
      x-=xSpeed;
      x2 = 10;
      x3 = 25;
      x4 = 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x+=xSpeed;
      x2 = 20;
      x3 = 35;
      x4 = 20;
    }

    //Kill cube if enemy is touched
    if (x>=xEfour-50 &&x<=xEfour+50 &&y>=yEfour-50 &&y<=yEfour+50) {
      life-=1;
      x = 1000;
      y = 650;
    }
    if (x>=xE5-50 &&x<=xE5+50 &&y>75 &&y<150) {
      life-=1;
      x = 1000;
      y = 650;
    }
    if (x>=xE6-50 &&x<=xE6+50 &&y>375 &&y<450) {
      life-=1;
      x = 1000;
      y = 650;
    }

    //Enemy movement
    if (posEthree===true){
      xE5+=eSpeed2;
      xE1 = 20;
      xE2 = 35;
      xE3 = 20;
    }
    if (xE5>=755){
      posEthree = false;
    }
    if (posEthree===false) {
      xE5-=eSpeed2;
      xE1 = 10;
      xE2 = 25;
      xE3 = 10;
    }
    if (xE5<=525) {
      posEthree = true;
    }

    if (posEfour===true){
      xE6+=eSpeed2;
      xE1two = 20;
      xE2two = 35;
      xE3two = 20;
    }
    if (xE6>=305){
      posEfour = false;
    }
    if (posEfour===false) {
      xE6-=eSpeed2;
      xE1two = 10;
      xE2two = 25;
      xE3two = 10;
    }
    if (xE6<=125) {
      posEfour = true;
    }

    //Second Enemy movement
    if (pyEfour===1) {
      xEfour+=eSpeed4;
    }
    if (xEfour>=1175 &&pyEfour===1) {
      xEfour = -25
    }
    if (xEfour>=125 &&xEfour<=130 &&pyEfour===1) {
      pyEfour = 2;
      xEfour = 125;
    }
    if (pyEfour===2) {
      yEfour+=eSpeed4;
    }
    if (yEfour>=425 &&pyEfour===2) {
      yEfour = 425;
      pyEfour = 3;
    }
    if (pyEfour===3) {
      xEfour+=eSpeed4;
    }
    if (xEfour>=350 &&pyEfour===3) {
      xEfour = 350;
      pyEfour = 4;
    }
    if (pyEfour===4) {
      yEfour+=eSpeed4;
    }
    if (yEfour>=500 &&pyEfour===4) {
      yEfour = 500;
      pyEfour = 5;
    }
    if (pyEfour===5) {
      xEfour-=eSpeed4;
    }
    if (xEfour<=50 &&pyEfour===5) {
      xEfour = 50;
      pyEfour = 6;
    }
    if (pyEfour===6) {
      yEfour-=eSpeed4;
    }
    if (yEfour<=275 &&pyEfour===6) {
      yEfour = 275;
      pyEfour = 7;
    }
    if (pyEfour===7) {
      xEfour-=eSpeed4;
    }
    if (xEfour<=-25 &&pyEfour===7) {
      xEfour = 1175;
    }
    if (xEfour<=850 &&xEfour>=845 &&pyEfour===7) {
      xEfour = 850;
      pyEfour = 8;
    }
    if (pyEfour===8) {
      yEfour-=eSpeed4;
    }
    if (yEfour<=200 &&pyEfour===8) {
      yEfour = 200;
      pyEfour = 1;
    }

    //Teleports cube across screen
    if (x >= 1175) {
      x = -25;
    }
    if (x < -25) {
      x = 1175;
    }

    if (keyIsDown(32) || keyIsDown(38)) {
      if (jump === false) {
        jump = true;
        dy=15; //When jumping change the y value by 15 pixels
        gravity = 0.5;
      }
    }
  } //FINAL LEVEL

  if (level===9) {
    background(200); // Background color
    drawBoss();
    fill(175);
    rect(525,775,100,25);
    drawFloor();
    drawPlatform();
    drawKey();
    drawMain(x,y,size) // Create main character
    strokeWeight(0);
    fill(150);
    y-=dy; //Move object in the air (if jumping)
    dy -= gravity; //Apply gravity (if jumping)

    if (life===3 || life===2 || life===1) {
      drawLife();
    }
    if (life===0) {
      level = 12;
    }

    //Check to see if object hit the ground
    if (y>725 &&x<525 || y>725 &&x>550) {
      y = 725;
      gravity = 0;
      dy = 0;
      jump = false;
    }

    //Stop object once hit bottom of platform
    if (y<= 600 && y>=590 &&x>690-50 &&x<1110){
      y = 600;
      gravity = 1;
     }

     //Stop object if hit the sides of the 2nd platform
     if (x<= platx+105 &&x>=platx+100 && y<=599 && y>=526) {
       x = platx+105
       gravity = 0.7
     }
    if (x<= platx-40 &&x>=platx-55 && y<=599 && y>=526) {
      x = platx-55
      gravity = 0.7
    }
     //Stop object once hit bottom of 2nd platform
     if (y<=600 && y>=590 &&x>platx-50 &&x<platx+100){
       y = 600;
       gravity = 1;
      }
     //Stop object once hit top of 2nd platform
     if (y>= 525 && y<=535 &&x>platx-50 &&x<platx+100){
       y = 525;
       gravity = 0;
       dy = 0;
       jump = false;
      }
      //If object leaves 2nd platform, apply gravity
      if (y>= 525 && y<=535 &&x<platx-50){
        gravity = 0.5;
        jump = true;
       }
      if (y>= 525 && y<=535 &&x>platx+100){
        gravity = 0.5;
        jump = true;
      }

      //Stop object if hit the sides of the 3rd platform
      if (x<= platx1+105 &&x>=platx1+100 && y<=399 && y>=326) {
        x = platx1+105
        gravity = 1;
      }
     if (x<= platx1-40 &&x>=platx1-55 && y<=399 && y>=326) {
       x = platx1-55
       gravity = 1;
     }
      //Stop object once hit bottom of 3rd platform
      if (y<=400 && y>=390 &&x>platx1-50 &&x<platx1+100){
        y = 400;
        gravity = 1;
       }
      //Stop object once hit top of 3rd platform
      if (y>= 325 && y<=335 &&x>platx1-50 &&x<platx1+100){
        y = 325;
        gravity = 0;
        dy = 0;
        jump = false;
       }
       //If object leaves 3rd platform, apply gravity
       if (y>= 325 && y<=335 &&x<platx1-50){
         gravity = 0.5;
         jump = true;
        }
       if (y>= 325 && y<=335 &&x>platx1+100){
         gravity = 0.5;
         jump = true;
       }

      //Movement of Cube on platform
      if (y>= 525 && y<=535 &&x>platx-50 &&x<platx+100 &&platPos===true){
         x+=platSpeed;
       }
       if (y>= 525 && y<=535 &&x>platx-50 &&x<platx+100 &&platPos===false){
          x-=platSpeed;
        }
        if (y>= 325 && y<=335 &&x>platx1-50 &&x<platx1+100 &&platPos1===true){
           x+=platSpeed1;
         }
         if (y>= 325 && y<=335 &&x>platx1-50 &&x<platx1+100 &&platPos1===false){
            x-=platSpeed1;
          }

      //Movement of the platform
      if (platPos===true) {
        platx+=platSpeed;
      }
      if (platx>=500) {
        platx = 500;
        platPos = false;
      }
      if (platPos===false) {
        platx-=platSpeed
      }
      if (platx<=100) {
        platx = 100;
        platPos = true;
      }

      if (platPos1===true) {
        platx1+=platSpeed1;
      }
      if (platx1>=500) {
        platx1 = 500;
        platPos1 = false;
      }
      if (platPos1===false) {
        platx1-=platSpeed1
      }
      if (platx1<=100) {
        platx1 = 100;
        platPos1 = true;
      }

    //Stop enemy from moving past the screen
    if (x < 0) {
      x+=xSpeed
    }

    if (x >= 1151) {
      x-=xSpeed
    }
    if (y<=725 &&x>525 &&x<550) {
      jump = true;
      gravity = 0.5;
    }
    //Enemy movement
    if (xE<=699 &&posE===false) {
      posE = true;
    }
    if (posE===true){
      xE+=eSpeed
      xE1 = 20;
      xE2 = 35;
      xE3 = 20;
    }
    if (xE>=1055 &&posE===true){
      posE = false;
    }
    if (posE===false) {
      xE-=eSpeed
      xE1 = 10;
      xE2 = 25;
      xE3 = 10;
    }
    //Teleport back
    if (y>=749) {
      level = 8;
      y = 5;
    }

    //Projectile movement
    if (pro===true) {
      pro1-=proSpeed;
    }
    if (pro1<-200 &&pro===true) {
      pro1 = 950;
    }
    //Kill cube if enemy is touched
    if (x>=700-50 &&x<=1100 &&y>=175-50 &&y<=575) {
      life-=1;
      x = 1000;
      y = 725;
    }
    //Kill cube if projectile is touched
    if (x>=pro1-50 &&x<=pro1+180 &&y>=proY-565 &&y<=proY-400) {
      life-=1;
      x = 100;
      y = 725;
    }

    //Player wins when key is found
    if (y>=100 &&y<=200 &&x>=250 &&x<=300){
      level = 13;
    }


    //Player x movement
    if (keyIsDown(LEFT_ARROW)) {
      x-=xSpeed;
      x2 = 10;
      x3 = 25;
      x4 = 10;
    }
    if (keyIsDown(RIGHT_ARROW)) {
      x+=xSpeed;
      x2 = 20;
      x3 = 35;
      x4 = 20;
    }
    if (keyIsDown(32) || keyIsDown(38)) {
      if (jump === false) {
        jump = true;
        dy=15; //When jumping change the y value by 15 pixels
        gravity = 0.5;
      }
    }

  } //FINAL LEVEL PT.2
}

function drawMain(x,y,size) {
 if (level===1 || level===2 || level===3 || level===5 || level===7 || level===8 || level===9) {
   noStroke();
   fill(255,25,100);
   rect(x,y,size,size);
   fill(255,75,100);
   rect(x+5,y+5,size/1.25,size/1.25)
   fill(150);
   rect(x+x2,y+y2,size/10,size/10)
   rect(x+x3,y+y3,size/10,size/10)
   rect(x+x4,y+y4,size/2.4,size/10)
 }
} //DRAW CUBE

function drawFloor() {
  if (level===0 || level===1 || level===2 || level===3 || level===4 || level===5 || level===6 || level===7 || level===8){
    let x = 0;
    let y = 700;
    noStroke();
    fill(150);
    rect(x, y, 1200, 800);
  }
  if (level===9) {
    let x = 0;
    let y = 775
    noStroke();
    fill(150);
    rect(x,y,525,25)
    rect(x+600,y,600,25)
    fill(25,113,255);
    rect(525,795,size*1.5,size/10)
  }
} //DRAW FLOOR

function drawPlatform() {
  if (level===1){
    let x = 400;
    let y = 500;
    let size = 50;
    noStroke()
    fill(150);
    rect(x,y,size*8,size/2)
  }
  if (level===2){
    let x = 100;
    let y = 475;
    let size = 50;
    noStroke()
    fill(150);
    rect(x,y,size*8,size/2)
    rect(x+600,y-225,size*8,size/2)
  }
  if (level===3 || level===5){
    let x = 100;
    let y = 475;
    let size = 50;
    noStroke()
    fill(150);
    rect(x,y,size*8,size/2)
    rect(x+600,y-225,size*8,size/2)
  }
  if (level===7 || level===8) {
    let x = 100;
    let y = 475;
    let size = 50;
    noStroke()
    fill(150);
    rect(x,y,size*6-50,size/2)
    rect(x,y-200,size/2,size*4)
    rect(x-100,y-225,size*2.5,size/2)
    rect(x+800,y-225,size*6,size/2)
      if (level===8) {
        rect(x+400,y-300,size*6,size/2)
        rect(x+400,y-475,size/2,size*4)
        fill(25,113,255);
        rect(525,0,size*1.5,size/10)
        fill(150);
        rect(x+500,y-475,size/2,size*2)
        rect(x+400,y-275,size/2,size*8)
    }
  }
  if (level===9) {
    let x = 690;
    let y = 575;
    let size = 50;
    noStroke()
    fill(150);
    rect(x,y,size*8+20,size/2)
    rect(platx,575,size*2,size/2)
    rect(platx1,375,size*2,size/2)
  }
} //DRAW PLATFORM

function drawKey() {
  //function that creates the key
  if (level===1){
    let x = 587;
    let y = 300;
    let size = 25;
    noStroke()
    fill(255,200,0);
    rect(x,y,size,size/4)
    rect(x-6,y+6,size/4,size)
    rect(x+26,y+6,size/4,size)
    rect(x,y+31,size,size/4)
    rect(x+10,y+26,size/4,size*2.5)
    rect(x+10,y+86,size/1.2,size/4)
    rect(x+10,y+81,size/1.7,size/4)
    rect(x+10,y+76,size/1.2,size/4)
  }
  if (level===2 || level===5){
    let x = 1137;
    let y = 300;
    let size = 25;
    noStroke()
    fill(255,200,0);
    rect(x,y,size,size/4)
    rect(x-6,y+6,size/4,size)
    rect(x+26,y+6,size/4,size)
    rect(x,y+31,size,size/4)
    rect(x+10,y+26,size/4,size*2.5)
    rect(x+10,y+86,size/1.2,size/4)
    rect(x+10,y+81,size/1.7,size/4)
    rect(x+10,y+76,size/1.2,size/4)
  }
  if (level===3){
    let x = 450;
    let y = 70;
    let size = 25;
    noStroke()
    fill(255,200,0);
    rect(x,y,size,size/4)
    rect(x-6,y+6,size/4,size)
    rect(x+26,y+6,size/4,size)
    rect(x,y+31,size,size/4)
    rect(x+10,y+26,size/4,size*2.5)
    rect(x+10,y+86,size/1.2,size/4)
    rect(x+10,y+81,size/1.7,size/4)
    rect(x+10,y+76,size/1.2,size/4)
  }
  if (level===7){
    let x = 650;
    let y = 70;
    let size = 25;
    noStroke()
    fill(255,200,0);
    rect(x,y,size,size/4)
    rect(x-6,y+6,size/4,size)
    rect(x+26,y+6,size/4,size)
    rect(x,y+31,size,size/4)
    rect(x+10,y+26,size/4,size*2.5)
    rect(x+10,y+86,size/1.2,size/4)
    rect(x+10,y+81,size/1.7,size/4)
    rect(x+10,y+76,size/1.2,size/4)
 }
 if (level===9){
   let x = 250;
   let y = 100;
   let size = 25;
   noStroke()
   fill(220,0,0);
   rect(x,y,size,size/4)
   rect(x-6,y+6,size/4,size)
   rect(x+26,y+6,size/4,size)
   rect(x,y+31,size,size/4)
   rect(x+10,y+26,size/4,size*2.5)
   rect(x+10,y+86,size/1.2,size/4)
   rect(x+10,y+81,size/1.7,size/4)
   rect(x+10,y+76,size/1.2,size/4)
}
  if (level===4) {
    if (k1===true) {
      let x = 600;
      let y = 28;
      let size = 20;

      noStroke()
      fill(255,200,0);
      rect(x+5,y-5,size,size/4)
      rect(x,y,size/4,size)
      rect(x+25,y,size/4,size)
      rect(x+5,y+20,size,size/4)
      rect(x+30,y+8,size*2.5,size/4)
      rect(x+75,y-4,size/4,size/1.2)
      rect(x+70,y+1,size/4,size/1.7)
      rect(x+65,y-4,size/4,size/1.2)
    }
    if (k2===true) {
      let x = 605;
      let y = 78;
      let size = 20;

      noStroke()
      fill(255,200,0);
      rect(x+5,y-5,size,size/4)
      rect(x,y,size/4,size)
      rect(x+25,y,size/4,size)
      rect(x+5,y+20,size,size/4)
      rect(x+30,y+8,size*2.5,size/4)
      rect(x+75,y-4,size/4,size/1.2)
      rect(x+70,y+1,size/4,size/1.7)
      rect(x+65,y-4,size/4,size/1.2)
    }
    if (k3===true) {
      let x = 565;
      let y = 128;
      let size = 20;

      noStroke()
      fill(255,200,0);
      rect(x+5,y-5,size,size/4)
      rect(x,y,size/4,size)
      rect(x+25,y,size/4,size)
      rect(x+5,y+20,size,size/4)
      rect(x+30,y+8,size*2.5,size/4)
      rect(x+75,y-4,size/4,size/1.2)
      rect(x+70,y+1,size/4,size/1.7)
      rect(x+65,y-4,size/4,size/1.2)
    }
    if (k4===true) {
      let x = 615;
      let y = 178;
      let size = 20;

      noStroke()
      fill(255,200,0);
      rect(x+5,y-5,size,size/4)
      rect(x,y,size/4,size)
      rect(x+25,y,size/4,size)
      rect(x+5,y+20,size,size/4)
      rect(x+30,y+8,size*2.5,size/4)
      rect(x+75,y-4,size/4,size/1.2)
      rect(x+70,y+1,size/4,size/1.7)
      rect(x+65,y-4,size/4,size/1.2)
    }
    if (k5===true) {
      let x = 730;
      let y = 228;
      let size = 20;

      noStroke()
      fill(255,200,0);
      rect(x+5,y-5,size,size/4)
      rect(x,y,size/4,size)
      rect(x+25,y,size/4,size)
      rect(x+5,y+20,size,size/4)
      rect(x+30,y+8,size*2.5,size/4)
      rect(x+75,y-4,size/4,size/1.2)
      rect(x+70,y+1,size/4,size/1.7)
      rect(x+65,y-4,size/4,size/1.2)
    }
  }
} //DRAW KEY

function drawLife() {
  //Function to create and present lives the player has
  if (life===3) {
    let x = 10;
    let y = 10;
    let size = 50;
    let x2 = 20;
    let y2 = 15;
    let x3 = 35;
    let y3 = 15;
    let x4 = 20;
    let y4 = 30;

    noStroke();
    fill(255,25,100);
    rect(x+120,y,size,size);
    fill(255,75,100);
    rect(x+5+120,y+5,size/1.25,size/1.25)
    fill(150);
    rect(x+x2+120,y+y2,size/10,size/10)
    rect(x+x3+120,y+y3,size/10,size/10)
    rect(x+x4+120,y+y4,size/2.4,size/10)
    noStroke();
    fill(255,25,100);
    rect(x+60,y,size,size);
    fill(255,75,100);
    rect(x+5+60,y+5,size/1.25,size/1.25)
    fill(150);
    rect(x+x2+60,y+y2,size/10,size/10)
    rect(x+x3+60,y+y3,size/10,size/10)
    rect(x+x4+60,y+y4,size/2.4,size/10)
    noStroke();
    fill(255,25,100);
    rect(x,y,size,size);
    fill(255,75,100);
    rect(x+5,y+5,size/1.25,size/1.25)
    fill(150);
    rect(x+x2,y+y2,size/10,size/10)
    rect(x+x3,y+y3,size/10,size/10)
    rect(x+x4,y+y4,size/2.4,size/10)
  }
  if (life===2) {
    let x = 10;
    let y = 10;
    let size = 50;
    let x2 = 20;
    let y2 = 15;
    let x3 = 35;
    let y3 = 15;
    let x4 = 20;
    let y4 = 30;

    noStroke();
    fill(255,25,100);
    rect(x+60,y,size,size);
    fill(255,75,100);
    rect(x+5+60,y+5,size/1.25,size/1.25)
    fill(150);
    rect(x+x2+60,y+y2,size/10,size/10)
    rect(x+x3+60,y+y3,size/10,size/10)
    rect(x+x4+60,y+y4,size/2.4,size/10)
    noStroke();
    fill(255,25,100);
    rect(x,y,size,size);
    fill(255,75,100);
    rect(x+5,y+5,size/1.25,size/1.25)
    fill(150);
    rect(x+x2,y+y2,size/10,size/10)
    rect(x+x3,y+y3,size/10,size/10)
    rect(x+x4,y+y4,size/2.4,size/10)
  }
  if (life===1) {
    let x = 10;
    let y = 10;
    let size = 50;
    let x2 = 20;
    let y2 = 15;
    let x3 = 35;
    let y3 = 15;
    let x4 = 20;
    let y4 = 30;

    noStroke();
    fill(255,25,100);
    rect(x,y,size,size);
    fill(255,75,100);
    rect(x+5,y+5,size/1.25,size/1.25)
    fill(150);
    rect(x+x2,y+y2,size/10,size/10)
    rect(x+x3,y+y3,size/10,size/10)
    rect(x+x4,y+y4,size/2.4,size/10)
  }
} //DRAW LIFE

function drawEnemy() {
  if (level===3 || level===5) {
    noStroke();
    fill(25,170,100);
    rect(xE,200,size,size);
    fill(75,190,100);
    rect(xE+5,200+5,size/1.25,size/1.25)
    fill(100);
    rect(xE+xE1,215,size/10,size/10)
    rect(xE+xE2,215,size/10,size/10)
    rect(xE+xE3,230,size/2.4,size/10)
      if (level===5) {
        noStroke();
        fill(25,170,100);
        rect(xEtwo,425,size,size);
        fill(75,190,100);
        rect(xEtwo+5,425+5,size/1.25,size/1.25)
        fill(100);
        rect(xEtwo+xE1two,425+15,size/10,size/10)
        rect(xEtwo+xE2two,425+15,size/10,size/10)
        rect(xEtwo+xE3two,425+30,size/2.4,size/10)
    }
  }
  if (level===7) {
    noStroke();
    fill(12, 68, 158);
    rect(xEthree,yEthree,size,size);
    fill(13, 84, 198);
    rect(xEthree+5,yEthree+5,size/1.25,size/1.25)
    fill(50);
    rect(xEthree+10,yEthree+15,size/10,size/10)
    rect(xEthree+35,yEthree+15,size/10,size/10)
    rect(xEthree+11,yEthree+30,size/1.8,size/10)

      noStroke();
      fill(12, 68, 158);
      rect(xEfour,yEfour,size,size);
      fill(13, 84, 198);
      rect(xEfour+5,yEfour+5,size/1.25,size/1.25)
      fill(50);
      rect(xEfour+10,yEfour+15,size/10,size/10)
      rect(xEfour+35,yEfour+15,size/10,size/10)
      rect(xEfour+11,yEfour+30,size/1.8,size/10)
}
  if (level===8) {
    noStroke();
    fill(12, 68, 158);
    rect(xEfour,yEfour,size,size);
    fill(13, 84, 198);
    rect(xEfour+5,yEfour+5,size/1.25,size/1.25)
    fill(50);
    rect(xEfour+10,yEfour+15,size/10,size/10)
    rect(xEfour+35,yEfour+15,size/10,size/10)
    rect(xEfour+11,yEfour+30,size/1.8,size/10)

    noStroke();
    fill(25,170,100);
    rect(xE5,125,size,size);
    fill(75,190,100);
    rect(xE5+5,125+5,size/1.25,size/1.25)
    fill(100);
    rect(xE5+xE1,125+15,size/10,size/10)
    rect(xE5+xE2,125+15,size/10,size/10)
    rect(xE5+xE3,125+30,size/2.4,size/10)

    fill(25,170,100);
    rect(xE6,425,size,size);
    fill(75,190,100);
    rect(xE6+5,425+5,size/1.25,size/1.25)
    fill(100);
    rect(xE6+xE1two,425+15,size/10,size/10)
    rect(xE6+xE2two,425+15,size/10,size/10)
    rect(xE6+xE3two,425+30,size/2.4,size/10)
  }
} //DRAW ENEMIES

function drawLava() {
  if (level===7 || level===8) {
    let x = 400;
    let y = 700;
    let size = 50;
    noStroke()
    fill(255, 38, 0);
    rect(x,y,size*8,size/5)
  }
} // DRAW LAVA

function drawLavaBubbles() {
  if (level===7 || level===8) {
    let size = 50;

    noStroke()
    fill(255, 38, 0);
    strokeWeight(2)
    stroke(160, 49, 2)
    rect(xL1,yL1,size/5,size/5)
      fill(s);
      strokeWeight(0);
      rect(xL1+xS1,yL1+yS1,size/6,size/5)
      rect(xL1+xS2,yL1+yS2,size/10,size/5)

    if (pyL1===1) {
      yL1-=y1Lspeed;
      s = 150;
    }
    else if (pyL1===2) {
     y1Lspeed = 3;
     yL1+=y1Lspeed;
     s = 200;
    }
    if (yL1<=650 &&pyL1===1) {
      pyL1 = 2;
    }
    if (yL1>=780 &&pyL1===2) {
      yL1 = 780;
      pyL1 = 3;
    }
    if (pyL1===3) {
      x1Lspeed = 5;
      xL1+=x1Lspeed;
    }
    if (xL1>=750 &&pyL1===3) {
      xL1 = 750;
      pyL1 = 4;
    }
    if (pyL1===4) {
      s = 150;
      y1Lspeed = 2;
      yL1-=y1Lspeed;
    }
    if (yL1<=650 &&pyL1===4) {
      pyL1 = 5;
    }
    if (pyL1===5) {
      s = 200;
      y1Lspeed = 3;
      yL1+=y1Lspeed;
    }
    if (yL1>=780 &&pyL1===5) {
      yL1 = 780;
      pyL1 = 6;
    }
    if (pyL1===6) {
      x1Lspeed = 2.5;
      xL1-=x1Lspeed;
    }
    if (xL1<=592 &&pyL1===6) {
      xL1 = 592;
      pyL1 = 7;
    }
    if (pyL1===7) {
      s = 150;
      y1Lspeed = 2;
      yL1-=y1Lspeed;
    }
    if (yL1<650 &&pyL1===7) {
      pyL1 = 8;
    }
    if (pyL1===8) {
      s = 200;
      y1Lspeed = 3;
      yL1+=y1Lspeed;
    }
    if (yL1>=780 && pyL1===8) {
      yL1 = 780
      pyL1 = 9;
    }
    if (pyL1===9) {
      x1Lspeed = 2;
      xL1-=x1Lspeed;
    }
    if (xL1<=450 &&pyL1===9) {
      pyL1 = 1;
    }
 }
} //Draw Lava Bubbles

function drawBoss() {
  let size = 400;
  noStroke();
  fill(102, 62, 100);
  rect(700,175,size,size)
  fill(142, 87, 140);
  rect(725,200,size-50,size-50);
  fill(45);
  rect(750,400,size/2,size/3)
  fill(45);
  rect(750,300,size/5,size/20)
  rect(870,300,size/5,size/20)
  fill(204, 32, 32);
  rect(760,300,size/20,size/20)
  rect(880,300,size/20,size/20)

  //Projectile
  fill(247, 51, 51);
  rect(pro1,proY-470,size/26.6666666667,size/26.6666666667);
  rect(pro1+15,proY-455,size/26.6666666667,size/26.6666666667);
  rect(pro1+30,proY-440,size/26.6666666667,size/26.6666666667);
  rect(pro1+45,proY-425,size/26.6666666667*5,size/26.6666666667);
  rect(pro1+120,proY-440,size/26.6666666667*2,size/26.6666666667);
  rect(pro1+150,proY-455,size/26.6666666667*2,size/26.6666666667);
  rect(pro1+180,proY-470,size/26.6666666667*3,size/26.6666666667);

  fill(232, 129, 20);
  rect(pro1+15,proY-485,size/26.6666666667,size/26.6666666667);
  rect(pro1+30,proY-500,size/26.6666666667,size/26.6666666667);
  rect(pro1+45,proY-515,size/26.6666666667*5,size/26.6666666667);
  rect(pro1+120,proY-500,size/26.6666666667*2,size/26.6666666667);
  rect(pro1+150,proY-485,size/26.6666666667*2,size/26.6666666667);

  fill(224, 171, 58);
  rect(pro1+15,proY-470,size/26.6666666667,size/26.6666666667);
  rect(pro1+30,proY-455,size/26.6666666667,size/26.6666666667);
  rect(pro1+45,proY-440,size/26.6666666667*5,size/26.6666666667);
  rect(pro1+105,proY-455,size/26.6666666667*3,size/26.6666666667);
  rect(pro1+135,proY-470,size/26.6666666667*3,size/26.6666666667);

  fill(242, 219, 46);
  rect(pro1+30,proY-485,size/26.6666666667,size/26.6666666667);
  rect(pro1+45,proY-500,size/26.6666666667*5,size/26.6666666667);
  rect(pro1+105,proY-485,size/26.6666666667*3,size/26.6666666667);

  fill(239, 239, 43);
  rect(pro1+45,proY-485,size/26.6666666667*4,size/26.6666666667);
  rect(pro1+45,proY-455,size/26.6666666667*4,size/26.6666666667);
  rect(pro1+30,proY-470,size/26.6666666667,size/26.6666666667);
  rect(pro1+105,proY-470,size/26.6666666667*2,size/26.6666666667);

  //Hiding projectile
  fill(255, 232, 119);
  rect(pro1+45,proY-470,size/26.6666666667*4,size/26.6666666667);

  fill(142, 87, 140);
  rect(950,400,size/3.2,size/3);

  fill(102, 62, 100);
  rect(1075,400,size/16,size/3);

  fill(200);
  rect(1100,440,size/5,size/8)

}//Draw boss and projectile
