let img;
let boids, stop, partir;

let A = 0;
let S = 0;
let D = 0;
let W = 0;
//let F = 0;

function setup() {
  createCanvas(560, 520);
  background(220);
  stop = createButton("frenar");
  stop.mousePressed(stoped);
  partir = createButton("comienzo");
  partir.mousePressed(start);
  let a = 2*PI;
  boids = [];
  let b = new Boid(0, 0, 6, a);
  boids.push(b);
  img = loadImage("laberinto01.jpg");
}

function draw() {
  image(img, 0, 0);

  for (let i = 0; i < boids.length; i++) {
    translate(10, 90);
    boids[i].draw();

    if (S == 1) {
      boids[i].goS();
    }
    if (D == 1) {
      boids[i].goD();
    }
    if (W == 1) {
      boids[i].goW();
    }
    if (A == 1) {
      boids[i].goA();
    }
    /*if (F == 1) {
      boids[i].stops();
    }*/
  }
}

class Boid {
  constructor(x, y, t, a) {
    this.x = x; // posición X
    this.y = y; // posición Y
    this.t = t; // tamaño
    this.a = a; // ángulo
  }
  draw() {
    fill("red");
    noStroke();
    translate(this.x, this.y);
    rotate(this.a);
    beginShape();
    vertex(-this.t, -this.t * 1.5);
    vertex(this.t * 3, 0);
    vertex(-this.t, this.t * 1.5);
    endShape(CLOSE);
  }

  goS() {
    this.a = HALF_PI;
    rotate(this.a);

    this.x += cos(HALF_PI);
    this.y += sin(HALF_PI);
  }
  goD() {
    this.a = 2 * PI;
    rotate(this.a);

    this.x += cos(2 * PI);
    this.y += sin(2 * PI);
  }
  goW() {
    this.a = -HALF_PI;
    rotate(this.a);
    this.x += cos(-HALF_PI);
    this.y += sin(-HALF_PI);
  }
  goA() {
    this.a = PI;
    rotate(this.a);
    this.x += cos(PI);
    this.y += sin(PI);
  }
}

function start() {
  S = 0;
  D = 1;
  W = 0;
  A = 0;
}

function stoped() {
  S = 0;
  D = 0;
  W = 0;
  A = 0;
}
function keyPressed() {
  if (keyCode === ENTER) {
    S = 0;
    D = 0;
    W = 0;
    A = 0;
  }
  if (keyCode === LEFT_ARROW) {
    S = 0;
    D = 0;
    W = 0;
    A = 1;
    //F=0;
  }
  if (keyCode === RIGHT_ARROW) {
    S = 0;
    D = 1;
    W = 0;
    A = 0;
    //F=0;
  }
  if (keyCode === UP_ARROW) {
    S = 0;
    D = 0;
    W = 1;
    A = 0;
    //F=0;
  }
  if (keyCode === DOWN_ARROW) {
    S = 1;
    D = 0;
    W = 0;
    A = 0;
    //F=0;
  }
}
