//1 break points // conditions

let x = 3;

function f(x) {
  return ++x;
}

for (let i = 0; i < 10; i++) {
  if (i % 2 === 0) {
    x = f(x);
  }
}

console.log(x);

//2 step in/over
// let x = 2;
// let y = 3;

// function f1(x, y) {
//   return f2(x) + f3(y);
// }

// function f2(x) {
//   return x * 2;
// }

// function f3(x) {
//   return x * 3;
// }

// let i = f1(x, y);
// console.log(i);

//3 step out

// function f(x) {
//   let i = 1;
//   return x * 2;
// }

// let y = f(1);
// console.log(y);

//4
// function sumFullDeclaration(x, y) {
//   return x + y;
// }

// let sumArrowFunction = (x, y) => x + y;

// var y = 2;
//let x = 4;

// let i = sumFullDeclaration(x, y);
// let j = sumArrowFunction(x, y);
