function setup() {
  createCanvas(windowWidth, windowHeight);
  fill( 20, 40, 90, 20);
  noStroke();
}

function draw() {
  background(500);
  let niveles = round(map(mouseX, 0, width, 0, 10));
  recursiveellipse(width / 2.5, height / 2.5, 500, niveles);
}

function recursiveellipse(x, y, diam, levels) {
  ellipse(x, y, diam);
  if (levels > 2) {
    recursiveellipse(x, y - diam / 2, diam / 2, levels - 2);
    recursiveellipse(x, y + diam / 2, diam / 2, levels - 2);
    recursiveellipse(x - diam / 2, y, diam / 2, levels - 2);
    recursiveellipse(x + diam / 2, y, diam / 2, levels - 2);

  }
}