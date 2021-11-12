function setup() {
  createCanvas(800, 800);
  noStroke();
}

function draw() {
  background(500);
  let niveles = round(map(mouseX, mouseY, width, 0, 12));
  recursiveellipse(width/2, height/2, 400, niveles);
}

function recursiveellipse(x, y, diam, levels) {
  square(x, y, diam);
  if (mouseIsPressed) {
    fill(400, 80, 10, 100);
  } else {
    fill(100, 30, 120, 50);
  }

  if (levels > 4) {
  recursiveellipse(x, y - diam / 2, diam / 2, levels - 2);
  recursiveellipse(x, y + diam / 2, diam / 2, levels - 2);
  recursiveellipse(x - diam / 2, y, diam / 2, levels - 2);
  recursiveellipse(x + diam / 2, y, diam / 2, levels - 2);
}
}


