//1
// let x = 10;

// function f1(x) {
//   return x + 1;
// }

// function f2(x) {
//   return x + 2;
// }

// function f3(x) {
//   return x + 3;
// }

// function f4(x) {
//   let t = 3;
//   //x += 11;
//   return x + 4;
// }

// let i = x;
// i = f1(i);
// i = f2(i);
// i = f3(i);
// i = f4(i);

// console.log(i);

// 2

// let x = 10;

// function f1(x) {
//   return x + 1;
// }

// function f2(x) {
//   return x + 2;
// }

// function f3(x) {
//   return x + 3;
// }

// function f4(x) {
//   return x + 4;
// }

// let i = x;
// i = f4(f3(f2(f1(i))));

// console.log(i);

//3
let x = 10;

function f1(x) {
  return f2(x) + 1;
}

function f2(x) {
  return f3(x) + 2;
}

function f3(x) {
  return f4(x) + 3;
}

function f4(x) {
  return x + 4;
}

let i = x;
i = f1(i);

console.log(i);
