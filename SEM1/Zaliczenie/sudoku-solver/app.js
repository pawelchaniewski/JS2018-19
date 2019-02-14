/* **********************************

Sudoku Solver

Strategy:
- gather information about all empty cells
- iterate through those vectors
- get all available numbers for this cell (all possible numbers to fill in)
- start by filling cells with only ONE possible number
- repeat process until sudoku is solved

This strategy is flawed! When there is no cell with one possible number to fill in
then it won't fill any, so you end up in endless loop searching for cell that do not exist.

Better solution would be to bruteforce first row (fill in the gaps in the row with random numbers).
Still, there could be a problem when there are no empty cells in the first row,
but then, algorithm could possibly check another one and try to fill that one.
*********************************** */

// const sudokuMatrix = [
//     [7, 0, 4, 8, 0, 0, 3, 0, 1],
//     [8, 2, 0, 5, 0, 0, 0, 4, 0],
//     [0, 0, 9, 4, 3, 0, 5, 0, 0],
//     [3, 1, 0, 0, 0, 0, 8, 0, 7],
//     [0, 8, 0, 0, 0, 0, 0, 1, 0],
//     [9, 0, 7, 0, 0, 0, 0, 3, 2],
//     [0, 0, 6, 0, 1, 5, 4, 0, 0],
//     [0, 7, 0, 0, 0, 9, 0, 6, 5],
//     [5, 0, 8, 0, 0, 2, 1, 0, 3]
// ];

const sudokuMatrix = [
    [0, 0, 4, 0, 0, 0, 0, 6, 7],
    [3, 0, 0, 4, 7, 0, 0, 0, 5],
    [1, 5, 0, 8, 2, 0, 0, 0, 3],
    [0, 0, 6, 0, 0, 0, 0, 3, 1],
    [8, 0, 2, 1, 0, 5, 6, 0, 4],
    [4, 1, 0, 0, 0, 0, 9, 0, 0],
    [7, 0, 0, 0, 8, 0, 0, 4, 6],
    [6, 0, 0, 0, 1, 2, 0, 0, 0],
    [9, 3, 0, 0, 0, 0, 7, 1, 0]
];

// This sudoku is too hard for this script!
// const sudokuMatrix = [
//     [8, 6, 0, 0, 2, 0, 0, 0, 0],
//     [0, 0, 0, 7, 0, 0, 0, 5, 9],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 0, 0, 6, 0, 8, 0, 0],
//     [0, 4, 0, 0, 0, 0, 0, 0, 0],
//     [0, 0, 5, 3, 0, 0, 0, 0, 7],
//     [0, 0, 0, 0, 0, 0, 0, 0, 0],
//     [0, 2, 0, 0, 0, 0, 6, 0, 0],
//     [0, 0, 7, 5, 0, 9, 0, 0, 0]
// ];

const sudokuAllAvailableNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const getEmptyCellsInRow = sudokuRow =>
    sudokuRow
        // Good lesson here: 'and' operand evaluates two sides, and won't return index 0 (falsy)
        // .map((value, index) => value === 0 && index) // short version of if (value ...) return index
        .map((value, index) => {
            if (value === 0) return index;
        })
        // Also here - explicitly compare to undefined!
        .filter(x => x !== undefined); // to get rid of 'undefined'

// Get indexes of all empty cells in each row
const getEmptyCellsVectors = sudokuMatrix => {
    const emptyCellsVectors = [];
    sudokuMatrix.forEach((row, rowIndex) =>
        getEmptyCellsInRow(row).map(columnIndex =>
            emptyCellsVectors.push([rowIndex, columnIndex])
        )
    );
    return emptyCellsVectors;
};

const availableNumbersInRowsMatrix = sudokuMatrix.map(
    row => sudokuAllAvailableNumbers.filter(number => !row.includes(number)) // array [1...9] is constant representing all possible numbers
);

const getAvailableNumbersInRow = (rowIndex, sudokuMatrix) =>
    sudokuAllAvailableNumbers.filter(
        number => !sudokuMatrix[rowIndex].includes(number)
    );

const getAvailableNumbersInColumn = (columnIndex, sudokuMatrix) =>
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

const getAvailableNumbersInGrid = (
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

const getAvailableNumbersInCell = (rowIndex, columnIndex, sudokuMatrix) => {
    const gridPos = ((rowIndex, columnIndex) => {
        // Removes digits afret decimal (parsed to int - smth like floor)
        const nearestStartRowIndex = Math.trunc(rowIndex / 3) * 3;
        const nearestStartColumnIndex = Math.trunc(columnIndex / 3) * 3;

        return {
            startRowIndex: nearestStartRowIndex,
            endRowIndex: nearestStartRowIndex + 2,
            startColumnIndex: nearestStartColumnIndex,
            endColumnIndex: nearestStartColumnIndex + 2
        };
    })(rowIndex, columnIndex);

    const availableNumbersInGrid = getAvailableNumbersInGrid(
        gridPos.startRowIndex,
        gridPos.endRowIndex,
        gridPos.startColumnIndex,
        gridPos.endColumnIndex,
        sudokuMatrix
    );

    const availableNumbersInRow = getAvailableNumbersInRow(
        rowIndex,
        sudokuMatrix
    );

    const availableNumbersInColumn = getAvailableNumbersInColumn(
        columnIndex,
        sudokuMatrix
    );

    // console.log(availableNumbersInRow);
    // console.log(availableNumbersInColumn);
    // console.log(availableNumbersInGrid);

    return availableNumbersInGrid
        .filter(number => availableNumbersInRow.includes(number))
        .filter(number => availableNumbersInColumn.includes(number));
};

console.table(sudokuMatrix);
const emptyCells = getEmptyCellsVectors(sudokuMatrix);

const newSudokuMatrix = [...sudokuMatrix];

while (emptyCells) {
    let stopFlag = true;
    for (let index = 0; index < emptyCells.length; index++) {
        const vector = emptyCells[index];

        const [rowIndex, columnIndex] = vector;
        const availableNumbersInCell = getAvailableNumbersInCell(
            rowIndex,
            columnIndex,
            newSudokuMatrix
        );
        console.log(
            `Numers available for cell, row: ${rowIndex} column: ${columnIndex} = ${availableNumbersInCell}`
        );

        if (availableNumbersInCell.length === 1) {
            newSudokuMatrix[rowIndex][columnIndex] = availableNumbersInCell[0];
            emptyCells.splice(index, 1);
            stopFlag = false;
        }
    }
    if (stopFlag) {
        console.log(newSudokuMatrix);
        console.log(`Empty Cells left: ${emptyCells}`);
        break;
    }
}
