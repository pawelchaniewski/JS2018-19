"use strict";

let grid = [
  [0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0]
];

function main(grid) {
  console.clear();
  console.table(grid);
  let newGrid = [];
  for (let rowIndex = 0; rowIndex < grid.length; rowIndex++) {
    const row = grid[rowIndex];
    let newRow = [];
    for (let columnIndex = 0; columnIndex < row.length; columnIndex++) {
      const columnLenght = grid.length;
      const cell = grid[rowIndex][columnIndex];
      let neighbours = 0;
      let newCell = 0;

      // on the top
      if (rowIndex - 1 >= 0) {
        if (grid[rowIndex - 1][columnIndex] === 1) {
          neighbours++;
        }
      }

      // on the bottom
      if (rowIndex + 1 < row.length) {
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
      if (columnIndex + 1 < grid.length) {
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
      if (rowIndex + 1 < row.length && columnIndex - 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex - 1] === 1) {
          neighbours++;
        }
      }

      // on the top right
      if (rowIndex - 1 >= 0 && columnIndex + 1 < grid.length) {
        if (grid[rowIndex - 1][columnIndex + 1] === 1) {
          neighbours++;
        }
      }

      // on the bottom right
      if (rowIndex + 1 < row.length && columnIndex + 1 >= 0) {
        if (grid[rowIndex + 1][columnIndex + 1] === 1) {
          neighbours++;
        }
      }
      
      if (neighbours < 2) {
        newCell = 0;
      } else if (neighbours === 2 && cell === 1) {
        newCell = 1;
      } else if (neighbours === 2 && cell === 0) {
        newCell = 0;
      } else if (neighbours === 3) {
        newCell = 1;
      } else {
        newCell = 0;
      }
      
    //   newCell = neighbours;
      newRow.push(newCell);

      // console.log(`neightbours ${neighbours}`);
    }
    newGrid.push(newRow);
  }
  return newGrid;
}

function sleep(ms) {
    return new Promise(resolve => {
        setTimeout(resolve, ms)
    });
}
async function run() {
    for (let i = 0; i < 50; ++i) {
        grid = main(grid);
        await sleep(100);
    }
}
run();

