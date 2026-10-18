
function Blob(x, y, r) {
  this.pos = createVector(x, y);
  this.r = r;

  this.eats = function(other) {
    var d = p5.Vector.dist(this.pos, other.pos);

    if (d < this.r + other.r * 0.1) {
      this.r += other.r;
      return true;
    } else {
      return false;
    }
  };

  this.show = function() {
  drawingContext.shadowBlur = 60;
  drawingContext.shadowColor = "rgba(210, 225, 225, 0.9)";

  noStroke();
  fill(255, 245, 235);
  ellipse(this.pos.x, this.pos.y, this.r * 2, this.r * 2);

  // Reset the shadow so it doesn't affect other drawings
  drawingContext.shadowBlur = 0;
  drawingContext.shadowColor = "rgba(0, 0, 0, 0)";
};
}