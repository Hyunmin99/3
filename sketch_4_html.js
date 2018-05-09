var img, moon, good;
var alpah;

function setup() {
  createCanvas(777, 633);
  background(0);
  img = loadImage('pic_3.jpg');
  moon = loadImage('moon.png');
  good = loadImage('Good.png');
  alpah = 0;
}

function draw() {
  image(moon, 0, 0);
}

function mousePressed() {
  var d = dist(mouseX, mouseY, 60, 40);
  
  if(d<=30) {
    image(img, 0, 0);
    fill(0, 255-alpah);
    rect(0, 0, 777, 633);
    alpah = alpah +20;
    if(255-alpah == 15) {
      alpah = 0;
      image(good, 0, 0, 777, 633);
    }
  }
}
