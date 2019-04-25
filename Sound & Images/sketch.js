var mySong; // Creates a variable to hold the sound
var img, loadimg; //Creates a variable to hold the image
var bg;

  function preload() {
    mySong = loadSound('song.mp3');  // Loads the sound file into the variable
    loadimg = loadImage('tenor.gif');
    img = createImg('tenor.gif');
    bg = loadImage('wall.png');
  }

  function setup() {
    createCanvas(windowWidth,windowHeight);
     background(random(0,255),random(0,255),random(0,255));

    // Notice that you have to put the variable name in front of the functions
    mySong.setVolume(0.1);
    mySong.play();
  }

  function draw() {
     background(bg);
     img.position(windowWidth/2,windowHeight/4);
  }
