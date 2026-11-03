let x = 40;
let y = 40;
let goLeft = false;
let goLeftForY= false;


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220,15,0);
  fill(255,155,255)
  ellipse(x,y,50,50)
  if(goLeft == false){
    x = x+3;
    }
  if(goLeft==true){
    x=x-3
  }
  if(x>400)
  {
    goLeft= true;
  }
   if(x<0)
  {
    goLeft= false;
  }
   if(goLeft == false){
    y = y+3;
    }
  if(goLeft==true){
    y=y-3
  }
  if(x>400)
  {
    goLeft= true;
  }
   if(x<0)
  {
    goLeft= false;
  }
  
}