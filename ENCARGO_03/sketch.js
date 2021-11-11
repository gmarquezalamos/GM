let s, ss;

function setup() {
  createCanvas(400, 400);  
  s = createSlider(20,380,10,1);
  ss = createSlider (20,380,10,1);
}

function draw() {
 background('white');
 let y = s.value();
 
  
  for ( let x=20; x < width -20; x +=5) {
     stroke (random(250),random(250),random(250));
     line(x,20,x,y);
  }
  
  let x =ss.value();
  for (let y=20; y < height - 20; y +=5){
    line (20,y,x,y);
  }
}

