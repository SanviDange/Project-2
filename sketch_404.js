var blob;
 
var blobs = []; 

function setup() {
  createCanvas (windowWidth, windowHeight);

  noCursor();
  
  blob = new Blob(width/2, height/2, 64);
  for (var i = 0; i < 30; i++)  {
    blobs [i] = new Blob (random(width), random(height), (16));
  }
}

function draw() {
  // Transparent instead of black so images/videos beneath the canvas show through
  clear();

  // Make the big blob follow the mouse
  blob.pos.x = mouseX;
  blob.pos.y = mouseY;
  blob.show();
  
  for (var i = blobs.length-1; i>=0; i--) {
    if (blob.eats(blobs[i])) {
      blobs.splice(i,1);
    }  else {
    blobs[i].show();
  }
  }
}