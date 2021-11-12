/*Mientras yo tenga menos de 3 click voy a tener un dibujo, al hacer el tercer click cambiar la forma*/

/* Aparezca la palabra imagen en un círculo que tenga bordes móviles*/

function setup() {
  createCanvas(windowWidth, windowHeight);
  ellipseMode(CENTER);
  rectMode(CENTER);
  background("black");
}

let click = 1;

function draw() {}

function mouseClicked() {
  if (click < 3) {
    noStroke();
    ellipse(mouseX, mouseY, 100, 100);
    textStyle(BOLD);
    textAlign(CENTER, CENTER);
    text("Imagen", mouseX, mouseY);

    click = click + 1;
    return false;
  } else {
    rect(mouseX, mouseY, 100, 50);
    text("Escrita", mouseX, mouseY);
    click = 1;
  }
}
