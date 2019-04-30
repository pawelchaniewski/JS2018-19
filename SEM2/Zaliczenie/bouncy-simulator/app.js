/// <reference path="./lib/p5.d/p5.global-mode.d.ts" />

// import { Actor } from "./actor.js";

const board0 = [
  ["X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X"]
];

const board = [
  ["X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "X", "0", "0", "0", "X"],
  ["X", "0", "0", "X", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "x", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X"]
];

const board2 = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "X", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
];

const board3 = [
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "1", "0", "X", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "X", "X", "X", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "Y", "0", "X"],
  ["X", "0", "0", "0", "X", "X", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "X", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "Y", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "0", "0", "0", "0", "0", "0", "0", "0", "0", "0", "X"],
  ["X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X", "X"]
];

class Block {
  constructor(x, y, w, h, collision = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collision = collision;
    this.touched = false;
    this.color = this.collision ? 255 : 64;
  }

  touch() {
    this.touched = true;
    this.color -= 30;
  }

  show() {
    stroke(64);
    fill(this.color);
    rect(this.x, this.y, this.w, this.h);

    fill(50);
    text(`${this.x} ${this.y}`, this.x, this.y);
  }

  intersects(other) {
    const distance = dist(this.x, this.y, other.x, other.y);
    if (
      distance <= other.w / 2 + this.w / 2 ||
      distance <= other.h / 2 + this.h / 2
    ) {
      return true;
    } else {
      return false;
    }
  }
}

class Actor {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.vx = 1;
    this.vy = 1;
  }

  show() {
    stroke(255);
    rect(this.x, this.y, this.w, this.h);

    fill(50);
    text(`${this.x} ${this.y}`, this.x, this.y);
  }

  move() {
    this.x += this.w * this.vx;
    this.y += this.h * this.vy;
  }

  reverseVector() {
    this.vx *= -1;
    this.vy *= -1;
  }
}

function boardParser(arrBoard, block_width, block_height) {
  let boardCollection = [];
  arrBoard.map(function(rowValue, rowIndex) {
    const y = rowIndex;
    rowValue.map(function(value, index) {
      const x = index;
      let collision = false;
      if (String(value).toLowerCase() === "x") {
        collision = true;
      } else {
        collision = false;
      }

      boardCollection.push(
        new Block(
          x * block_width + block_width / 2,
          y * block_height + block_height / 2,
          block_width,
          block_height,
          collision
        )
      );
    });
  });

  return boardCollection;
}

let boardParsed;
let actor;

function setup() {
  const BLOCK_HEIGHT = Math.floor(windowHeight / board.length);
  const BLOCK_WIDTH = BLOCK_HEIGHT;
  const ACTOR_START_POS_X = BLOCK_HEIGHT + BLOCK_HEIGHT / 2;
  const ACTOR_START_POS_Y = BLOCK_WIDTH + BLOCK_WIDTH / 2;

  frameRate(5);
  rectMode(CENTER);

  boardParsed = boardParser(board, BLOCK_WIDTH, BLOCK_HEIGHT);
  createCanvas(windowWidth, windowHeight);

  actor = new Actor(
    ACTOR_START_POS_X,
    ACTOR_START_POS_Y,
    BLOCK_WIDTH,
    BLOCK_HEIGHT
  );
}

function draw() {
  background(0);
  // First show all objects
  for (let i = 0; i < boardParsed.length; i++) {
    const obj = boardParsed[i];
    obj.show();
  }
  actor.show();
  actor.move();

  // Second check if there is any collision
  let objTouched = [];
  for (let i = 0; i < boardParsed.length; i++) {
    const obj = boardParsed[i];
    if (obj.collision && obj.intersects(actor)) {
      print("Objects collide!");
      objTouched.push(obj);
      obj.touch();
    }
  }

  if (objTouched.length === 1) {
    const obj = objTouched[0];
    // Check where is object in relation to actors position (is it below, on the left etc.)
    if (obj.y === actor.y) {
      actor.vx *= -1;
    } else if (obj.x === actor.x) {
      actor.vy *= -1;
    }
  } else if (objTouched.length > 1) {
    actor.vx *= -1;
    actor.vy *= -1;
  }
  // actor.x = mouseX;
  // actor.y = mouseY;
}
