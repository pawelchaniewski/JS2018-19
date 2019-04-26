/// <reference path="./lib/p5.d/p5.global-mode.d.ts" />

// import { Actor } from "./actor.js";

const board1 = [
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

class Block {
  constructor(x, y, w, h, collision = true) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.collision = collision;
  }

  show() {
    stroke(64);

    if (this.collision) {
      fill(255);
    } else {
      fill(64);
    }

    rect(this.x, this.y, this.w, this.h);
  }
}

class Actor {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speed = 10;
    this.vx = 1;
    this.vy = 1;
  }

  show() {
    stroke(255);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx * this.speed;
    this.y += this.vy * this.speed;
  }

  onCollision() {}
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
          x * block_width,
          y * block_height,
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
  print(windowWidth, windowHeight);
  const BLOCK_HEIGHT = Math.floor(windowHeight / board.length);
  const BLOCK_WIDTH = BLOCK_HEIGHT;
  const ACTOR_START_POS_X = BLOCK_HEIGHT;
  const ACTOR_START_POS_Y = BLOCK_WIDTH;

  print(BLOCK_WIDTH, BLOCK_HEIGHT);

  boardParsed = boardParser(board, BLOCK_WIDTH, BLOCK_HEIGHT);

  createCanvas(windowWidth, windowHeight);
  actor = new Actor(
    ACTOR_START_POS_X,
    ACTOR_START_POS_Y,
    BLOCK_WIDTH,
    BLOCK_HEIGHT
  );
  // print(actor.x, actor.y);
  print(boardParsed);
}

function draw() {
  background(0);
  for (let i = 0; i < boardParsed.length; i++) {
    const obj = boardParsed[i];
    obj.show();
  }
  actor.show();
  actor.move();
}
