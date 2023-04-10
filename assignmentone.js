let bubbles = [];//empty array  that will hold all of our Bubble objects.

class Bubble { //defineclass called Bubble 
  constructor(x, y, r) { // this takes three parameters: x, y, and r, which represent the initial x and y positions of the bubble and its radius.
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = color(random(255), random(255), random(255));//Randomize color of bubbles
  }
  
  move() { //randomly changes the x and y positions of the bubble by a small amount each frame, causing it to jitter around the canvas
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }
  
  update() { //calls move() and then checks whether the bubble has gone off the edge of the canvas; if it has, it wraps the bubble around to the opposite edge so that it continues to move around the screen
    this.move();
    this.checkEdges();
  }
  
  show() { //draws the bubble on the canvas using ellipse()
    push();
    stroke(255);
    fill(this.color);
    ellipse(this.x, this.y, this.r * 2);
    pop();
  }
  
  checkEdges() {
    if (this.x < -this.r) {
      this.x = width + this.r*2;
    } else if (this.x > width + this.r) {
      this.x = -this.r;
    }
    
    if (this.y < -this.r) {
      this.y = height + this.r;
    } else if (this.y > height + this.r) {
      this.y = -this.r;
    }
  }
}

function setup() {
  createCanvas(960, 540);
  for (let i = 0; i < 5; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 50);
    bubbles.push(new Bubble(x, y, r));
  }
}

function draw() {
  background(0);
  for (let bubble of bubbles) {
    bubble.update();
    bubble.show();
  }
}

