/*
House Assignment
Created by Brady Gould
March 18, 2019
*/

function setup() {
  //Create the canvas
  createCanvas(1200,870);
  background(135, 206, 235)
  ellipseMode(CENTER)
 }

function draw() {
  //set the width of the house
  //change this variable to scale the house
  let houseWidth = 400;

  //Ground
  fill(0,128,0);
  rect(0, height/2+houseWidth/1.5, 1200, 1000);

  //Main part of the House
  fill(220,20,60);
  rect(width/2, height/2, houseWidth, houseWidth/1.5);

  //Roof
  fill(0);
  triangle(width/2, height/2, width/2+houseWidth/2, height/2-houseWidth/2, width/2+houseWidth, height/2);

  //Door and Doorknob
  fill(1000);
  rect(width/2+houseWidth/5, height/2+houseWidth/3, houseWidth/5, houseWidth/3);

  fill(0);
  ellipse(width/2+houseWidth/2.7, height/2+houseWidth/2, houseWidth/50)

  //Window Panes
  fill(1000);
  rect(width/2+houseWidth/1.8, height/2+houseWidth/6, houseWidth/7, houseWidth/7);
  rect(width/2+houseWidth/1.8+houseWidth/7, height/2+houseWidth/6, houseWidth/7, houseWidth/7);
  rect(width/2+houseWidth/1.8, height/2+houseWidth/6+houseWidth/7, houseWidth/7, houseWidth/7);
  rect(width/2+houseWidth/1.8+houseWidth/7, height/2+houseWidth/6+houseWidth/7, houseWidth/7, houseWidth/7);
}
