"use strict";

const grid = [
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

function main(grid) {
  console.table(grid);
  let segment = [];
  let newGrid = [];
  for (let rowIndex = 0; rowIndex < grid.lenght; rowIndex++) {
    const row = grid[rowIndex];
    let newRow = [];
    for (let columnIndex = 0; columnIndex < row.lenght; columnIndex++) {
      const columnLenght = grid.lenght;
      const cell = grid[rowIndex][columnIndex];
      let neighbours = 0;

      // on the top
      if (rowIndex - 1 >= 0) {
        if (grid[rowIndex - 1][columnIndex] === 1) {
          neighbours++;
        }
      }

      // on the bottom
      if (rowIndex + 1 <= row.lenght) {
        if (grid[rowIndex + 1][columnIndex] === 1) {
          neighbours++;
        }
      }

      // on the left
      if (columnIndex - 1 >= 0) {
        if (grid[rowIndex][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the right
      if (columnIndex + 1 <= grid.lenght) {
        if (grid[rowIndex][columnIndex + 1] === 1) {
          neighbours++;
        }
      }

      // on the top left
      if (rowIndex - 1 >= 0 && columnIndex - 1 >= 0) {
        if (grid[rowIndex - 1][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the bottom left
      if (rowIndex + 1 <= row.lenght && columnIndex - 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the top right
      if (rowIndex + 1 >= 0 && columnIndex - 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the bottom right
      if (rowIndex + 1 <= row.lenght && columnIndex + 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex + 1] === 1) {
          neighbours++;
        }
      }

      console.log(`neightbours ${neighbours}`);
    }
  }
}

main(grid);
