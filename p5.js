function setup() {
  const canvas = createCanvas(windowWidth, windowHeight);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  noStroke();
  fill(0, 0, 0, 25); // semi-transparent black — lower alpha = slower fade, higher = faster
  rect(0, 0, width, height);
  
  fill(mouseY);
  circle(mouseX, mouseY, 50);
}

function mousePressed() {
}

