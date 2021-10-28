function setup() {
  createCanvas(160, 400);

}

function draw() {
   background(254,181,51);
  
// Líneas de colores 
  //Verticales
  //.  Y1,X1,Y2,X2
  var vx1;
  vx1 = 28;
  var vx2;
  vx2 = 123;
  
  strokeWeight(14);
  stroke(68,103,47);
  line(46,vx1,46,vx2);
  stroke(91,111,50);
  line(60,vx1,60,vx2);
  stroke(145,107,101);
  line(74,vx1,74,vx2);
  stroke(167,158,135);
  line(88,vx1,88,vx2);
  stroke(100,118,103);
  line(116,vx1,116,vx2); 
  stroke(179,97,87);
  line(130,vx1,130,vx2);
  
  //Horizontales
     //y1,x1,y2,x2
   var hy1;
  hy1 = 20;
  var hy2;
  hy2 = 140;
  stroke(218,184,123);
  line(hy1,140,hy2,140);
  stroke(145,107,101);
  line(hy1,154,hy2,154);
  stroke(190,89,59);
  line(hy1,168,hy2,168);
  stroke(100,118,103);
  line(hy1,182,hy2,182);
  stroke(181,158,58);
  line(hy1,196,hy2,196);
  stroke(75,64,46);
  line(hy1,210,hy2,210);
  
  //Diagonales_01
     //y1,x1,y2,x2
  var dx2;
  dx2 = 225;
  
  stroke(167,158,135);
  line(hy1,260,50,dx2);
  stroke(190,89,59);
  line(hy1,280,64,dx2);
  stroke(100,118,103);
  line(hy1,299,78,dx2);
  stroke(158,143,100);
  line(55,299,113,dx2);
  stroke(74,125,110);
  line(72,299,130,dx2);
  stroke(181,158,58);
  line(90,299,140,232);
  stroke(68,103,47);
  line(107,299,140,255);
  stroke(179,97,87);
  line(122,299,140,275);
  
  //Diagonales_02
  stroke(167,158,135);
      //Y1 X1  Y2 X2 //
      //H  V.   H V
  line(20,360,40,380);
  stroke(190,89,59);
  line(20,340,60,380);
  stroke(100,118,103);
  line(20,320,80,380);
  stroke(68,103,47);
  line(40,302,120,380);
  stroke(197,120,63);
  line(60,302,140,380);
  stroke(172,163,133);
  line(80,302,140,361);
  stroke(73,125,124);
  line(100,302,140,341);
  
    //RECTANGULO
    //Y, X
  stroke("black")
  rect(20,20,120,360);
  strokeWeight(12);
  noFill();
  
  //LINEAS  NEGRO
  line(hy1,130,hy2,130);
  line(hy1,223,hy2,223);
  line(hy1,300,hy2,300);
  
  }