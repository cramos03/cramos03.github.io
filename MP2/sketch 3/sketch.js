var bcirc = 0
bspeed = 10
var ysquare = 0
yspeed = 3
var psquare = 0
pspeed = 6
var rcirc = 0
rspeed = 1
var gsquare = 0
gspeed = 4
var tsquare = 0
tspeed = 8
var wcirc = 0
wspeed = 2.5
function setup() { 
    createCanvas(windowWidth, windowHeight); 
    yellowrecSize = random(windowWidth/15,windowWidth/2)
    circleSize = random(windowWidth/6, windowWidth/2)
    greensquareSize = random(150,250)
    blacksquareSize = random(50,150)
    turqrecSize = random(windowWidth/10,windowWidth/3)
    triSize = random(windowWidth/8,windowWidth/4)
    thircircSize = random(windowWidth/12, windowWidth/6)
}
  
function draw() { 
    background(255); 
    noStroke();
    fill('#FFC107')
    rect(0, ysquare ,yellowrecSize, yellowrecSize) 
    ysquare = ysquare + yspeed
    if (ysquare > windowHeight){
      yspeed = -3
    }
    if (ysquare < 0){
      yspeed = 3
    }
    fill('#E02F00')
    circle((windowWidth/4), (rcirc), circleSize);
    rcirc = rcirc + rspeed
    if (rcirc > windowWidth){
      rspeed = -1
    }
    if (rcirc < 0){
      rspeed = 1
    }
    fill('#FFFBD9')
    circle((windowWidth), (wcirc), circleSize);
    wcirc = wcirc + wspeed
    if (wcirc > windowWidth){
      wspeed = -2.5
    }
    if (wcirc < 0){
      wspeed = 2.5
    }
    fill('#14802D')
    square(windowWidth/2, gsquare , greensquareSize);
    gsquare = gsquare + gspeed
    if (gsquare > windowHeight){
      gspeed = -4
    }
    if (gsquare < 0){
      gspeed = 4
    }
    fill('#7E14C4')
    square(psquare, windowHeight/2, blacksquareSize)
    psquare = psquare + pspeed
    if (psquare > windowHeight){
      pspeed = -6
    }
    if (psquare < 0){
      pspeed = 6
    }
    fill('#009688')
    rect(tsquare, windowHeight/1.5 ,turqrecSize, turqrecSize)
    tsquare = tsquare + tspeed
    if (tsquare > windowHeight){
      tspeed = -8
    }
    if (tsquare < 0){
      tspeed = 8
    }
    fill('#003CE0')
    circle((bcirc), (windowHeight/4), thircircSize);
    bcirc = bcirc + bspeed
    if (bcirc > windowWidth){
      bspeed = -10
    }
    if (bcirc < 0){
      bspeed = 10
    }
    
} 