/* let running
running = no'running 
  just draw on the canvas

*/


let frames; // fotogramas
let span, current;

let prevTime, currentTime;
let opacidad, velocidad, grosor, colorpincel, colorfondo, animate, next, prev; //sliders y botones

function createFrames() {
  frames = [];
  for (let i = 0; i < span; i++) {
    let img = createGraphics(width, height);
    frames.push(img);
  }
}

function setup() {
  span = 5;
  current = 0;
  opacidad = createSlider(0, 200, 200, 1);
  velocidad = createSlider(0, 200, 50, 1);
  grosor = createSlider(0.5, 10, 5, 0.5);
  colorfondo = createInput("#000000", "color");
  colorpincel = createInput("#FFFFFF", "color");

  animate = createCheckbox("animar", true);
  prev = createButton("<");
  prev.mousePressed(prevFrame);
  next = createButton(">");
  next.mousePressed(nextFrame);
  prevTime = 0;
  currentTime = 0;
  createCanvas(800, 600);
  createFrames();
}

function draw() {
  background(colorfondo.value());
  image(frames[current], 0, 0);

  if (mouseIsPressed) {
    noCursor();
    frames[current].stroke(
      red(colorpincel.value()),
      green(colorpincel.value()),
      blue(colorpincel.value()),
      opacidad.value()
    );
    frames[current].strokeWeight(grosor.value());
    frames[current].line(pmouseX, pmouseY, mouseX, mouseY);
  } else {
    cursor();
  }

  if (currentTime > prevTime + velocidad.value() && animate.checked()) {
    nextFrame();
    prevTime = millis();
  }
  currentTime = millis();
}

function nextFrame() {
  current++;
  current %= span;
}

function prevFrame() {
  current--;
  if (current < 0) {
    current = span - 1;
  }
  current %= span;
}

function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    prevFrame();
  }

  if (keyCode === RIGHT_ARROW) {
    nextFrame();
  }
}