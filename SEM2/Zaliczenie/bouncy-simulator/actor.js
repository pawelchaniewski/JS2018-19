class Actor {
  constructor(x = 0, y = 0) {
    this.x = x;
    this.y = y;
  }

  show() {
    stroke(255);
    ellipse(this.x, this.y, 10, 10);
  }

  move() {
    this.x = this.x + 1;
    this.y = this.y + 1;
  }
}

export { Actor };
