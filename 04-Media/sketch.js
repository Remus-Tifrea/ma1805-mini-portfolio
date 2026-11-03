let video;
let hum;

function preload(){
hum = loadSound('goofysong.mp3')
video = createVideo('goofyartist1.mov')
}

function setup() {
  createCanvas(600, 400)

  video.size (600,400);
  video.hide();


}

function draw(){
background(0);
image(video, (width - 600) /2, (height -  400) /2, 600,400);

}

function mousePressed(){
video.loop();
hum.loop();

}