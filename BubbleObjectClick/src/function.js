let bubbles = [];
let rect; // Single rectangle object

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  let r = random(10, 50);
  let b = new Bubble(mouseX, mouseY, r);
  bubbles.push(b);
}


function draw() {
    background(0);
    
    for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].move();
        bubbles[i].show();
    }
    
    if (rect) {
        rect.move();
        rect.show();
    }
}

function keyPressed() {
  if (Space == keyCode) {
    if (!rect || rect.width < 10 || rect.height < 10) {
      let c = random(10, 50);
      let l = random(10, 50);
      rect = new Rectangle(mouseX, mouseY, c, l); // Create new rectangle
    } else {
      rect.width = 0; // Reset rectangle dimensions to allow new creation
      rect.height = 0;
    }
  }
}