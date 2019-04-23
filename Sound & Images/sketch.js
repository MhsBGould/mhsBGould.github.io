var mySong; // Creates a variable to hold the sound

  function preload() {
    mySong = loadSound('song.mp3');  // Loads the sound file into the variable
  }

  function setup() {
    createCanvas(640, 480);
    // Notice that you have to put the variable name in front of the functions
    mySong.setVolume(0.1);
    mySong.play();
  }
