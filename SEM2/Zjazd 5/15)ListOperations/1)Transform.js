//1
// function doubleIt(x) {
//   return x * 2;
// }

// function transform(arr, fn) {
//   var list = [];
//   for (var i = 0; i < arr.length; i++) {
//     list[i] = fn(arr[i]);
//   }

//   return list; // immutable
// }

// let result = transform([1, 2, 3], doubleIt);
// console.log(result);

//2 transform + curry
// function getIncreaseFunction(val) {
//   return function(x) {
//     return x + val;
//   };
// }

// function transform(arr, fn) {
//   var list = [];
//   for (var i = 0; i < arr.length; i++) {
//     list[i] = fn(arr[i]);
//   }

//   return list;
// }

// let changeFunction = getIncreaseFunction(4);

// let result = transform([1, 2, 3], changeFunction);
// console.log(result);
