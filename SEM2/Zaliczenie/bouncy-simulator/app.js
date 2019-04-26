/// <reference path="./lib/p5.d/p5.global-mode.d.ts" />

// import { Actor } from "./actor.js";

const board = [
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

const BLOCK_HEIGHT = 100;
const BLOCK_WIDTH = 100;

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
    this.vx = 10;
    this.vy = 10;
  }

  show() {
    stroke(255);
    rect(this.x, this.y, this.w, this.h);
  }

  move() {
    this.x += this.vx;
    this.y += this.vy;
  }

  onCollision() {}
}

function boardParser(arrBoard) {
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
          x * BLOCK_WIDTH,
          y * BLOCK_HEIGHT,
          BLOCK_WIDTH,
          BLOCK_HEIGHT,
          collision
        )
      );
    });
  });

  return boardCollection;
}

const boardParsed = boardParser(board);
let actor;

function setup() {
  const ACTOR_START_POS_X = 100;
  const ACTOR_START_POS_Y = 100;

  createCanvas(700, 1000);
  actor = new Actor(
    ACTOR_START_POS_X,
    ACTOR_START_POS_Y,
    BLOCK_WIDTH,
    BLOCK_HEIGHT
  );
  print(actor.x, actor.y);
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
