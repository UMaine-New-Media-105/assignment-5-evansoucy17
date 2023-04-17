let scale;
class Creature {
  constructor(x, y, scale) {
    this.x = x;
    this.y = y;
    
  
  }
  

  draw() {
    fill("darkolivegreen");
    ellipse(this.x - 90, this.y, 50, 135); // left back leg 
    ellipse(this.x + 90, this.y, 50, 135); // right back leg
    ellipse(this.x, this.y - 15, 200, 150); // body
    ellipse(this.x, this.y - 100, 200, 100); // head
    ellipse(this.x - 40, this.y + 40, 50, 75); // left front leg
    ellipse(this.x + 40, this.y + 40, 50, 75); // right front leg
    fill("black");
    ellipse(this.x - 50, this.y - 140, 50, 50); // left eye
    ellipse(this.x + 50, this.y - 140, 50, 50); // right eye
    fill("white");
    ellipse(this.x, this.y - 75, 100, 25); // mouth
 
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
    push();
    fill(255);
    noStroke();
    ellipse(this.x, this.y, this.r * 2);
    ellipse(this.x - this.r / 2, this.y + this.r / 2, this.r * 1);
    ellipse(this.x + this.r / 2, this.y + this.r / 2, this.r * 1);
    ellipse(this.x - this.r / 1.5, this.y - this.r / 2, this.r * 1);
    ellipse(this.x + this.r / 1.5, this.y - this.r / 2, this.r * 1);
    pop();
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

class Fly {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
  
  }
 draw() {
    push();
    translate(this.x, this.y);
    strokeWeight(5);
    fill('grey');
    ellipse(200, 200, 100, 100);
    fill('white');
    ellipse(130, 160, 100, 50);
    ellipse(270, 160, 100, 50);
    strokeWeight(1);
    ellipse(225, 200, 35, 35);
    ellipse(180, 200, 35, 35);
    fill("black");
    ellipse(225, 200, 25, 25);
    ellipse(180, 200, 25, 25);
    strokeWeight(5);
    line(150, 200, 100, 220);
    line(150, 220, 100, 250);
    line(250, 200, 300, 220);
    line(250, 220, 300, 250);
    pop();
  }
}
let fly;

function setup() {
  createCanvas(960, 540);
  x = random(400);
  fly = new Fly(x, 200, 1);
  creature = new Creature(150, 400, 0.4);
 
  for (let i = 0; i < 10; i++) {
    let x = random(width);
    let y = random(height);
    let r = random(20, 40);
    clouds.push(new Cloud(x, y, r));
  }
}

function draw() {
  background("skyblue");
  fill("brown");
  rect(0, 475, 960, 200);
  creature.draw();
  fly.draw();
  for (let i = 0; i < clouds.length; i++) {
    clouds[i].update();
    clouds[i].show();
  }
  
}
