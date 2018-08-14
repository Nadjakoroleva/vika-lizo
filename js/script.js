function setup() {
  createCanvas(500, 500);
}

function draw() {
  fill("#EEFF3B");
  ellipse(250, 250, mouseX, mouseX);
  fill("#090A01");
  ellipse(220, 220, mouseY, mouseY);
  fill("#090A01");
  ellipse(280, 220, 30, 30);
  fill("#F52707");
  rect(215, 280, 70, 10);
}
