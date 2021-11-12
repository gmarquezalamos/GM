let ellipseLength = 0;
let state = 1;

function setup() {
  createCanvas(windowWidth, 600);
  background("white");
}
function draw() {
  if (mouseIsPressed) {
    if (state == 1) {
      push();
      col = color("lightgrey");
      strokeWeight(0.2);
      noFill();
      ellipse(mouseX, mouseY, 40, 40);
      pop();
    }
  }
}

