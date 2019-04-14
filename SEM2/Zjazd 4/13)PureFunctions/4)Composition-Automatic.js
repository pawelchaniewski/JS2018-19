//1
// function sum(x, y) {
//   return x + y;
// }
// function mul(x, y) {
//   return x * y;
// }

// function compose(f1, f2) {
//   return function fc() {
//     var args = [].slice.call(arguments);
//     return f2(f1(args.shift(), args.shift()), args.shift());
//   };
// }

// let mulAndSum = compose(
//   mul,
//   sum
// );

// let x = mulAndSum(2, 3, 5);
// console.log(x);

//2
// let sum = (x, y) => x + y;
// let mul = (x, y) => x * y;

// function compose(f1, f2) {
//   return function fc() {
//     var args = [].slice.call(arguments);
//     return f2(f1(args.shift(), args.shift()), args.shift());
//   };
// }

// let x = compose(
//   mul,
//   sum
// )(2, 3, 5);

// console.log(x);
