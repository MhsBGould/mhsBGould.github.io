var mySong; // Creates a variable to hold the sound
var img, loadimg; //Creates a variable to hold the image

  function preload() {
    mySong = loadSound('song.mp3');  // Loads the sound file into the variable
    loadimg = loadImage('giphy2.gif');
    img = createImg('giphy2.gif');
  }

  function setup() {
    createCanvas(1280,800);
     background(random(0,255),random(0,255),random(0,255));

    // Notice that you have to put the variable name in front of the functions
    mySong.setVolume(0.1);
    mySong.play();
  }

  function draw() {
     img.position(640, 400);
  }
