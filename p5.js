
let snowflakes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

  // Create snowflakes after the canvas is initialized
  for (let i = 0; i < 40; i++) {
    snowflakes.push(new Snowflake());
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function draw() {
  // Fade the previous frame to create trails
  noStroke();
  fill(0, 0, 0, 25);
  rect(0, 0, width, height);

  // Mouse-controlled circle
  fill(255, 242, 230);
  circle(mouseX, mouseY, 50);

  let currentTime = frameCount / 60;

  // Update and display each snowflake
  for (let flake of snowflakes) {
    flake.update(currentTime);
    flake.display();
  }
}

function mousePressed() {
  // Leave empty unless you want a click interaction
}

class Snowflake {
  constructor() {
    this.posX = random(width);
    this.posY = random(-height, height);
    this.initialAngle = random(0, 360);
    this.size = random(30, 50);
    this.radius = sqrt(random(pow(width / 2, 2)));
    this.color = color(255, 242, 230);
  }

  update(time) {
    let angularSpeed = 5;
    let angle = this.initialAngle + angularSpeed * time;

    // Sway horizontally
    this.posX = width / 2 + this.radius * sin(angle);

    // Fall vertically
    let ySpeed = 1 / this.size;
    this.posY += ySpeed;

      // Flicker between visible and invisible
  this.opacity = random(0, 10);

  // Occasionally disappear completely
  if (random() < 0.015) {
    this.opacity = 0;
  }

    // Return to top when reaching bottom
    if (this.posY > height) {
      this.posY = -50;
    }
  }

display() {
  noStroke();

  // Very subtle, tight glow
  for (let r = this.size * 1.3; r > this.size; r -= 2) {
    fill(255, 242, 230, 6);
    circle(this.posX, this.posY, r * 1);
  }

  // Soft cream center
  fill(255, 242, 230, 190);
  circle(this.posX, this.posY, this.size);
}
}
