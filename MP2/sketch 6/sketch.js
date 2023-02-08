let circle1Color = 0;
let circle2Color = 0;
let circle3Color = 0;
let square1Color = 0;
let square2Color = 0;
let square3Color = 0;

let jazzSound;
let jazz2Sound;
let songPlaying = false
let song2Playing = false

function preload(){
  jazzSound = loadSound("jazz1.mp3")
  jazz2Sound = loadSound("jazz2.mp3")
}

function setup() { 
    createCanvas(windowWidth, windowHeight); 
    yellowrecSize = random(windowWidth/15,windowWidth/2.5)
    circleSize = random(windowWidth/6, windowWidth/2)
    greensquareSize = random(150,250)
    blacksquareSize = random(50,150)
    turqrecSize = random(windowWidth/10,windowWidth/3)
    circle1Color = color(random(255), random(255), random(255));
      circle2Color = color(random(255), random(255), random(255));
      circle3Color = color(random(255), random(255), random(255));
	  square1Color = color(random(255), random(255), random(255));
	  square2Color = color(random(255), random(255), random(255));
	  square3Color = color(random(255), random(255), random(255));
}
  
function draw() { 
    background(255); 
    noStroke();
    fill(square1Color)
    rect(0, 0 ,yellowrecSize, yellowrecSize) 
    fill(circle1Color)
    circle((windowWidth/4), (windowHeight/1.25), circleSize);
    fill(circle2Color)
    circle((windowWidth), (windowHeight/4), circleSize);
    fill(square2Color)
    square(windowWidth/1.5, windowHeight/1.5 , greensquareSize);
    fill(square3Color)
    square(windowWidth/2.5, windowHeight/2.5, blacksquareSize)
}    

function mousePressed(){
  if (mouseX < yellowrecSize && mouseY < yellowrecSize) {
    circle1Color = color(random(255), random(255), random(255));
      circle2Color = color(random(255), random(255), random(255));
      circle3Color = color(random(255), random(255), random(255));
	  square1Color = color(random(255), random(255), random(255));
	  square2Color = color(random(255), random(255), random(255));
	  square3Color = color(random(255), random(255), random(255));
    if (songPlaying === false) {
      jazzSound.play();
      songPlaying = true
    }
    else {
      jazzSound.stop()
      songPlaying = false
    }
  }
  if (mouseX > windowWidth/2.5 && mouseX < windowWidth/2.5 + blacksquareSize && mouseY > windowHeight/2.5 && windowHeight < windowHeight/2.5 + blacksquareSize) {
    circle1Color = color(random(255), random(255), random(255));
      circle2Color = color(random(255), random(255), random(255));
      circle3Color = color(random(255), random(255), random(255));
	  square1Color = color(random(255), random(255), random(255));
	  square2Color = color(random(255), random(255), random(255));
	  square3Color = color(random(255), random(255), random(255));
    if (song2Playing === false) {
      jazz2Sound.play();
      song2Playing = true
    }
    else {
      jazz2Sound.stop()
      song2Playing = false
  }
}
}  