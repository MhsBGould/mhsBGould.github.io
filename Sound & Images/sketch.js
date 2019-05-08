//Global Variables
var mySong; // Creates a variable to hold the sound
var img, loadimg; //Creates a variable to hold the image
var bg;

  function preload() {
    //loads the sounds and images
    mySong = loadSound('song.mp3');
    loadimg = loadImage('tenor.gif');
    img = createImg('tenor.gif');
    bg = loadImage('wall.png');
  }

  function setup() {
    createCanvas(windowWidth,windowHeight);
     background(random(0,255),random(0,255),random(0,255));

    //My Song is commanded to play
    mySong.setVolume(0.1);
    mySong.play();
  }

  function draw() {
    //Gif is displayed
    background(bg);
    img.position(windowWidth/2,windowHeight/4);
  }
