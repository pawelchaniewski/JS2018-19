/* **********************************

8 BALL Riddle

7/8 balls are equal weight (10), one of them is heavier (11). 
Find out which one, using scale only 2 times!

Process:
1. split 8 balls into 3 groups: 3-3-2
2. Weigh two groups (3 balls vs 3 balls)

IF 3 balls == 3 balls
    ---> take third group, split it and weigh 1 vs 1
    ---> one of them is the heavy ball
    ---> PROFIT

IF 3 balls != 3 balls ---> take heavier group, split it and weigh 2 of them (1 vs 1) --> 
    ---> IF ball == ball ---> the left one out is heavier
    ---> IF ball != ball ---> one of them is the heavy ball
    ---> PROFIT!

*********************************** */

const Ball = {
    number: 0,
    weight: 0
};

// DANGER DANGER HIGH VOLTAGE!
//
// ~ FANCY way of creating array of objects! ~
// * Array(8) - creates an empty array of 8 elements - but not really, it only has a length property that equals 8
// ------------------------------------------------
//     More on why need to spread [...Array(8)] that array HERE:
//     https://itnext.io/heres-why-mapping-a-constructed-array-doesn-t-work-in-javascript-f1195138615a
// ------------------------------------------------
// * map() - on every element in this array do ...
// * callbackfn(value, index) - must return element that will be append to newly created list
// * Object.apply - old way of creating new object (not really - its only a shallow copy)
//     ^--- instead just define class and create new instance of it with `new`
const arrBalls = [...Array(8)].map((_, i) => {
    let ball = Object.apply(Ball);
    ball.number = i;
    ball.weight = 10;
    return ball;
});

// So now arrBalls contains 8 Balls with equal weight, we need to modify one of them (random) to be heavier
// Get random number from range 0-7
const rndNumber = Math.floor(Math.random() * 7);
arrBalls[rndNumber].weight = 11;
console.table(arrBalls);

// Now find that fatty
//
// Split array into batches
// REMEMBER - slice takes 2 arg - start, end
// start index will be included, end wont
// thus --> slice(0,3) = [0, 1, 2] ---> range <0, 3)
const firstBatch = arrBalls.slice(0, 3);
const secondBatch = arrBalls.slice(3, 6);
const thirdBatch = arrBalls.slice(6, 8);

function returnHeavierSet(left, right) {
    if (!Array.isArray(left)) {
        left = [left];
    }

    if (!Array.isArray(right)) {
        right = [right];
    }

    const leftWeight = left.reduce((acc, ball) => acc + ball.weight, 0);
    const rightWeight = right.reduce((acc, ball) => acc + ball.weight, 0);

    if (leftWeight > rightWeight) {
        return left;
    }

    if (leftWeight < rightWeight) {
        return right;
    }

    if (leftWeight === rightWeight) {
        return null;
    }
}

const firstResult = returnHeavierSet(firstBatch, secondBatch);
if (firstResult === null) {
    console.log(returnHeavierSet(thirdBatch[0], thirdBatch[1]));
} else {
    const secondResult = returnHeavierSet(firstResult[0], firstResult[1]);
    if (secondResult) {
        console.log(secondResult);
    } else {
        console.log(firstResult[2]);
    }
}
