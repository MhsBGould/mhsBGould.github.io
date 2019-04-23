var mySong; // Creates a variable to hold the sound
var img; //Creates a variable to hold the image

  function preload() {
    mySong = loadSound('song.mp3');  // Loads the sound file into the variable
    img = loadImage('giphy.gif');
  }

  function setup() {
    createCanvas(1000,800);
    image(img, 0, 0);
    // Notice that you have to put the variable name in front of the functions
    mySong.setVolume(0.1);
    mySong.play();
  }
