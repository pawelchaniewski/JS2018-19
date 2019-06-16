"use strict";

class Coordinates {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  toInt() {
    return parseInt(`${this.x}${this.y}`);
  }
}

class Cell {
  constructor(value) {
    this.value = value;
  }
}

class Table {
  constructor() {
    this.value = [
      [34, 21, 32, 41, 25],
      [14, 42, 43, 14, 31],
      [54, 45, 52, 42, 23],
      [33, 15, 51, 31, 35],
      [21, 52, 33, 13, 23]
    ];
  }

  print() {
    console.table(this.value);
  }

  getCellValue(x, y) {
    return this.value[x][y];
  }
}

function toCoordinates(value) {
  const x = Math.trunc(value / 10) - 1;
  const y = (value % 10) - 1;

  return new Coordinates(x, y);
}

const gameField = new Table();
gameField.print();

console.log(`Wartość tego pola to: ${gameField.getCellValue(0, 0)}`);

let currentCoordinates = toCoordinates(11);
let currentValue = gameField.getCellValue(
  currentCoordinates.x,
  currentCoordinates.y
);

while (true) {
  console.log(
    `Jestem na polu: ${currentCoordinates.x} ${currentCoordinates.y}`
  );
  console.log(`Wartość tego pola to: ${currentValue}`);

  if (
    currentCoordinates.x === toCoordinates(currentValue).x &&
    currentCoordinates.y === toCoordinates(currentValue).y
  ) {
    console.log(
      `Znalazłem skarb na polu ${currentCoordinates.x} ${currentCoordinates.x}`
    );
    break;
  }

  currentCoordinates = toCoordinates(currentValue);

  currentValue = gameField.getCellValue(
    currentCoordinates.x,
    currentCoordinates.y
  );
}
