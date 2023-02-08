let jazzSound;
let songPlaying = false

function preload(){
  jazzSound = loadSound("jazz.mp3")
}

function setup() { 
    createCanvas(windowWidth, windowHeight); 
    yellowrecSize = random(windowWidth/15,windowWidth/2)
}
  
function draw() { 
    background(255); 
    noStroke();
    fill('#FFC107')
    rect(0, 0 ,yellowrecSize, yellowrecSize) 
} 

function mousePressed(){
  if (mouseX < yellowrecSize && mouseY < yellowrecSize) {
    if (songPlaying === false) {
      jazzSound.play();
      songPlaying = true
    }else {
      jazzSound.stop()
      songPlaying = false
    }
  }

  }
    