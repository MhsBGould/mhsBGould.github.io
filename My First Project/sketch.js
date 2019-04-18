var mySound; // Creates a variable to hold the sound

 function preload() {
   mySound = loadSound('dancin.mp3');  // Loads the sound file into the variable
 }

 function setup() {
   createCanvas(1280, 800);
   // Notice that you have to put the variable name in front of the functions
   mySound.setVolume(0.1);
   mySound.play();
 }

 function draw() {
  background(127);
 }
