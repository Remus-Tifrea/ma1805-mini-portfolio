let textX, textY;
let i=0;
let words = ['coding', 'is', 'kinda', 'fun']

function setup() {
  createCanvas(
    800,800);
  textX = width/2;
  textY = width/2;
  textSize(32)
  background(0,0,80)
}

function draw() {
  if (mouseIsPressed)
    textX = mouseX;
    textY = mouseY;
  textAlign(CENTER,CENTER)

  

background(0,0,30,25);
fill(200,200,255); 

  
text(words[i], textX, textY)
}
function mouseClicked() {  
  i++;
  if(i>=words.length){
   i = 0;
  }
}