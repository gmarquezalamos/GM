let lineLength = 0;
let angle = 0;
let angleSpeed = 1.5;
let col;
let state = 1;

function setup() {
  
  createCanvas(windowWidth, 600);
  background('black');
}
function draw() {
  if (mouseIsPressed) {
     if (state == 1){
    push();
   col = color('white');
    strokeWeight(0.2); 
    noFill();
    stroke(col);
    translate(mouseX,mouseY);
    rotate(radians(angle));
    line(0, 0, lineLength, 0);
    pop();
    angle += angleSpeed;
    }
    
  }
}

function mousePressed() {
  lineLength = random(5, 400);
}
