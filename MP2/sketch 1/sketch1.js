function setup() { 
    createCanvas(windowWidth, windowHeight); 
} 
  
function draw() { 
    background(255); 
    noStroke();
    fill('#FFC107')
    rect(0, 0 ,windowWidth/5, windowHeight/2) 
    fill('#FFFBD9')
    circle((windowWidth), (windowHeight/3.5), windowWidth/2);
    noFill();
    rect(windowWidth/2, windowHeight/2 , 150, 150);
    fill('#000000')
    square(0, windowHeight/2, 50)
    fill('#009688')
    rect(windowWidth/1.25, windowHeight/1.5 ,windowWidth/5, windowHeight/2.5)
    fill('#E02F00')
    triangle(windowWidth/2, windowHeight/2, windowWidth/4,windowHeight/2,windowWidth/2.75,windowHeight/4)
} 