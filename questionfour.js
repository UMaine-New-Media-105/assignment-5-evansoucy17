class Creature {
  constructor(x, y, scale, speed) {
    this.x = x;
    this.y = y;
    this.size = scale;
    this.speed = speed;
  }

  draw() {
    push();
    strokeWeight(2);
    fill("darkolivegreen");
    ellipse(this.x - 30, this.y, 16.6, 45); // left back leg
    ellipse(this.x + 30, this.y, 16.6, 45); // right back leg
    ellipse(this.x, this.y - 5, 66.6, 50); // body
    ellipse(this.x, this.y - 33.3, 66.6, 33.3); // head
    ellipse(this.x - 13.3, this.y + 13.3, 16.6, 25); // left front leg
    ellipse(this.x + 13.3, this.y + 13.3, 16.6, 25); // right front leg
    fill("black");
    ellipse(this.x - 16.6, this.y - 46.6, 16.6, 16.6); // left eye
    ellipse(this.x + 16.6, this.y - 46.6, 16.6, 16.6); // right eye
    fill("white");
    ellipse(this.x, this.y - 25, 33.3, 8.3); // mouth
    pop();
  }

  update() {
    // Move the creature horizontally
    this.x += this.speed;

    // Check if the creature has hit the left or right wall
    if (this.x < 0 || this.x > width) {
      // Reverse the horizontal direction
      this.speed *= -1;
    }

    // Check for collisions with other creatures
    for (let i = 0; i < creatures.length; i++) {
      // Don't check for collision with self
      if (creatures[i] === this) continue;
      }
    }
 
}
class Cloud {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }

  move() {
    this.x += random(-5, 5);
    this.y += random(-5, 5);
  }

  update() {
    this.move();
    this.checkEdges();
  }

  show() {
    rect(100,100,100)
    // push();
    // fill(255);
    // noStroke();
    // ellipse(this.x, this.y, this.r * 2);
    // ellipse(this.x - this.r / 2, this.y + this.r / 2, this.r * 1);
    // ellipse(this.x + this.r / 2, this.y + this.r / 2, this.r * 1);
    // ellipse(this.x - this.r / 1.5, this.y - this.r / 2, this.r * 1);
    // ellipse(this.x + this.r / 1.5, this.y - this.r / 2, this.r * 1);
    // pop();
  }

  checkEdges() {
    if (this.x < -this.r) {
      this.x = width + this.r * 2;
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

let creature;
let clouds = [];

let flies = [];

class Fly {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    this.size = scale;
  }
  show() {
    push();
    translate(this.x, this.y);
    strokeWeight(3);
    fill("grey");
    ellipse(66.6, 66.6, 33.3, 33.3);
    fill("white");
    ellipse(43.3, 53.3, 33.3, 16.6);
    ellipse(90, 53.3, 33.3, 16.6);
    strokeWeight(1);
    ellipse(75, 66.6, 11.6, 11.6);
    ellipse(60, 66.6, 11.6, 11.6);
    fill("black");
    ellipse(75, 66.6, 8.3, 8.3);
    ellipse(60, 66.6, 8.3, 8.3);
    strokeWeight(5);
    line(50, 66.6, 33.3, 73.3);
    line(50, 73.3, 33.3, 83.3);
    line(83.3, 66.6, 100, 77.3);
    line(83.3, 73.3, 100, 83.3);
    pop();
  }
}
let creatures = [];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 2; i++) {
    let x = random(width);
    let y = random(height - 200);
    let scale = random(0.1, 0.3);
    let speed = random(1, 10);
    creatures.push(new Creature(x, 325, scale, speed));
    flies.push(new Fly(x, y, scale));
  }
}

function draw() {
  background("skyblue");
  fill("brown");
  rect(0, 350, width, height);

 for (let i = 0; i < creatures.length; i++) {
    creatures[i].update();
    creatures[i].draw();
  }

  for (let i = 0; i < clouds.length; i++) {
    clouds[i].update();
    clouds[i].show();
  }

  for (let i = 0; i < flies.length; i++) {
    flies[i].show();
  }
}

  // Check for collisions between creatures
  for (let i = 0; i < creatures.length; i++) {
    creatures[i].update(creatures);
}
