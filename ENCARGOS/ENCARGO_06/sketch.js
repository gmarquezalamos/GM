let boids,boids2;
function setup() {
  createCanvas(900, 600);
  boids = [];
  boids2=[];
  /*let b = new Boid(100, 100, 10, 10, QUARTER_PI, "red");
  boids.push(b);
  let b2 = new Boid2(100, 100, 10, 10,-QUARTER_PI, "red");
  boids2.push(b2)*/
 //colorMode(RGB,random(250),random(250),random(250));
}

function draw() {
  background("#FFFFFF");
  for (let i = 0; i < boids.length; i++) {
    boids[i].draw();
    boids[i].goS();
    boids2[i].draw();
    boids2[i].goG();
  }
}

class Boid {
  constructor(x, y, t, h, a, c) {
    this.x = x; // posición X
    this.y = y; // posición Y
    this.t = t; // tamaño
    this.h = h; // largo
    this.a = a; // ángulo
    this.c = c; // color
    this.seed=round(random(0,9999999));
  }
  draw() {
    push();
    fill(this.c);
    noStroke();
    //rotate(this.a);
    beginShape();
    ellipse(this.x, this.y, this.t, this.h);
    endShape(CLOSE);
    pop();
  }

  goS() {
    
    noiseSeed(this.seed);
    this.a+= (noise(millis()/300)-0.5)*0.35;
    this.x += cos(this.a);
    this.y += sin(this.a)*0.0005;
  }
}
  class Boid2 {
  constructor(x, y, t, h, a, c) {
    this.x = x; // posición X
    this.y = y; // posición Y
    this.t = t; // tamaño
    this.h = h; // largo
    this.a = a; // ángulo
    this.c = c; // color
    this.seed=round(random(0,9999999));
  }
  draw() {
    push();
    fill(this.c);
    noStroke();
    beginShape();
    ellipse(this.x, this.y, this.t, this.h);
    endShape(CLOSE);
    pop();
  }

  
  goG() {
    noiseSeed(this.seed);
    this.a+= (noise(millis()/300)-0.5)*-0.3;
    this.x += cos(this.a);
    this.y += sin(this.a);
    //this.t+=0.5;
    //this.h+=0.5;
  }

}
function mousePressed(){
  let b = new Boid(mouseX, mouseY, random(10,20),random(10,20), QUARTER_PI, color(random(250),random(250),random(250)));
  boids.push(b);
  let b2 = new Boid2(mouseX, mouseY,random(10,20),random(10,20),-QUARTER_PI,color(random(250),random(250),random(250)));
  boids2.push(b2);
  
}