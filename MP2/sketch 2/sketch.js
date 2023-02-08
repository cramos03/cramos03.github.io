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
    rect(0, 0 ,yellowrecSize, yellowrecSize) 
    fill('#FFFBD9')
    circle((windowWidth), (windowHeight/3.5), circleSize);
    fill('#14802D')
    square(windowWidth/2, windowHeight/2 , greensquareSize);
    fill('#7E14C4')
    square(0, windowHeight/2, blacksquareSize)
    fill('#009688')
    rect(windowWidth/1.25, windowHeight/1.5 ,turqrecSize, turqrecSize)
    fill('#E02F00')
    circle((windowWidth/4), (windowHeight/1.25), circleSize);
    fill('#003CE0')
    circle((windowWidth/2), (windowHeight/2), thircircSize);
} 