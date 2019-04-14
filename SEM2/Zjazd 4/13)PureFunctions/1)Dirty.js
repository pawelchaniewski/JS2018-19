//1

// let y = 2;
// let z = 3;
// function f(x) {
//   y = y * x + z;
//   z = y * x;
// }

// f(5);
// console.log("y " + y);
// console.log("z " + z);

// f(5);
// console.log("y " + y);
// console.log("z " + z);

// 2

// function bar(x, y, z) {
//   f(x);
//   return [y, z]; // new state instead of changing old one

//   function f(x) {
//     y = y * x + z;
//     z = y * x;
//   }
// }

// let res1 = bar(5, 2, 3);
// let res2 = bar(5, ...res1);
// console.log(res1);
// console.log(res2);

// let res3 = bar(5, ...bar(5, 2, 3));
// console.log(res3);
