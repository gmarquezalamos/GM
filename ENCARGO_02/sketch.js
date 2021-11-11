/* crear un cuadrado mientras i sea menor que 10 en distintas posiciones */

let tr, cr, te, ce;

function setup() {
  createCanvas(550, 240);
  // Slider del cuadrado //
  tr = createSlider(0, 100, 50, 1);
  cr = createSlider(0, 250, 0, 10);

  // Slider de ellipse //
  te = createSlider(0, 200, 10, 1);
  ce = createSlider(0, 250, 250, 10);
  
  frameRate(15);
}

function draw() {
  background("#ADD8E6");
  let t = tr.value();
  let c = cr.value();
  let e = te.value();
  let g = ce.value();

  if (mouseIsPressed) {
    for (let i = 0; i < 10; i = 1 + i) {
      let x = random(550);
      let y = random(240);
      ellipse(x, y, t, t);
      noStroke();
      fill(c);
    }

    for (let i = 0; i < 10; i = 1 + i) {
      let x = random(550);
      let y = random(240);
      rect(x, y, e, e);
      noStroke();
      fill(g);
    }
  } else {
    for (let i = 0; i < 10; i = 1 + i) {
      let x = random(550);
      let y = random(240);
      fill(c);
      rect(x, y, t, t);
      noStroke();
      
    }

    for (let i = 0; i < 10; i = 1 + i) {
      let x = random(550);
      let y = random(240);
      fill(g);
      ellipse(x, y, e, e);
      noStroke();
      
    }
  }
}
