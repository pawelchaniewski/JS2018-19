/* **********************************

Sudoku Solver

Strategy:
- gather information about all empty cells
- split table in 9 3x3 matrix tables
- get available numbers (possible numbers to fill in cells)
- start with first row
- iterate first row's empty cells and fill them with possible number (random)
- before check if it's not a duplicate in column
- if duplication occurs - try other number and ....

*********************************** */

const sudokuMatrix = [
    [7, 0, 4, 8, 0, 0, 3, 0, 1],
    [8, 2, 0, 5, 0, 0, 0, 4, 0],
    [3, 1, 0, 0, 0, 0, 8, 0, 7],
    [0, 8, 0, 0, 0, 0, 0, 1, 0],
    [9, 0, 7, 0, 0, 0, 0, 3, 2],
    [0, 0, 6, 0, 1, 5, 4, 0, 0],
    [0, 7, 0, 0, 0, 9, 0, 6, 5],
    [5, 0, 8, 0, 0, 2, 1, 0, 3]
];

const sudokuAllAvailableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getEmptyCellsInRow = sudokuRow =>
    sudokuRow
        .map((value, index) => value === 0 && index) // short version of if (value ...) return index
        .filter(x => x); // to get rid of 'undefined'

// Get indexes of all empty cells in each row
const getEmptyCellsMatrix = sudokuMatrix =>
    sudokuMatrix.map(value => getEmptyCellsInRow(value));

const availableNumbersInRowsMatrix = sudokuMatrix.map(
    row => sudokuAllAvailableNumbers.filter(number => !row.includes(number)) // array [1...9] is constant representing all possible numbers
);

const availableNumbersInRow = (rowIndex, sudokuMatrix) =>
    sudokuAllAvailableNumbers.filter(
        number => !sudokuMatrix[rowIndex].includes(number)
    );

const availableNumbersInColumn = (columnIndex, sudokuMatrix) =>
    sudokuAllAvailableNumbers.filter(
        // as before i filter out from constant all used numbers
        number =>
            !sudokuMatrix // here im gathering all numbers from column
                .map(row => row[columnIndex] > 0 && row[columnIndex]) // if number is not 0 return it
                .filter(x => x) //get rid of 'false' - returns only truthy value
                .includes(number)
        // check if this number is in constant,
        // but rememeber, we are inversing this condition
        // so we be left out with those that were not used
    );

const availableNumbersInGrid = (
    startRowIndex,
    endRowIndex,
    startColumnIndex,
    endColumnIndex,
    sudokuMatrix
) =>
    sudokuAllAvailableNumbers.filter(
        // as before i filter out from constant all used numbers
        number =>
            !sudokuMatrix
                // get relevant rows (range)
                .slice(startRowIndex, endRowIndex + 1)
                // get relevant rows (range)
                .map(row =>
                    row
                        .slice(startColumnIndex, endColumnIndex + 1)
                        .filter(x => x > 0)
                )
                .flat() // WARNING! Experimantal method!! (but works!)
                .includes(number)
    );

const availableNumbersInCell = (rowIndex, columnIndex, sudokuMatrix) => {
    const gridPos = ((rowIndex, columnIndex) => {
        const nearestStartRowIndex = Math.trunc(rowIndex / 3) * 3;
        const nearestStartColumnIndex = Math.trunc(columnIndex / 3) * 3;

        return {
          startRowIndex: nearestStartRowIndex,
          endRowIndex: nearestStartRowIndex + 3,
          startColumnIndex: nearestStartColumnIndex,
          endColumnIndex: nearestStartColumnIndex + 3
        };
    })(rowIndex, columnIndex);

    const availableNumbersInGrid = availableNumbersInGrid(
        gridPos.startRowIndex,
        gridPos.endRowIndex,
        gridPos.startColumnIndex,
        gridPos.endColumnIndex,
        sudokuMatrix
    );
    
    const availableNumbersInRow = availableNumbersInRow(
        rowIndex, sudokuMatrix
    );
    
    const availableNumbersInColumn = availableNumbersInColumn(
        columnIndex, sudokuMatrix
    );
    
    return;
};

//     console.log(gridPos(4, 5));

// return
//     availableNumbersInGrid(0, 3, 0, 3, sudokuMatrix)
//         .filter(number =>
//             availableNumbersInRow(rowIndex, sudokuMatrix).includes(
//                 number
//             )
//         )
//         .filter(number =>
//             availableNumbersInColumn(
//                 columnIndex,
//                 sudokuMatrix
//             ).includes(number)
//         )
// );
// console.log(availableNumbersInRow(rowIndex, sudokuMatrix));
// console.log(availableNumbersInColumn(columnIndex, sudokuMatrix));
// }
// };

console.log(sudokuMatrix);
console.log(getEmptyCellsMatrix(sudokuMatrix));
console.log(availableNumbersInRow(0, sudokuMatrix));
console.log(availableNumbersInColumn(0, sudokuMatrix));

console.log(availableNumbersInCell(1, 3, sudokuMatrix));
console.log(availableNumbersInCell(1, 4, sudokuMatrix));
console.log(availableNumbersInCell(1, 6, sudokuMatrix));
console.log(availableNumbersInCell(4, 3, sudokuMatrix));

