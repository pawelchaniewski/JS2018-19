//1 fucntion composition
// function foo() {
//   return 42;
// }

// function bar() {
//   return 10;
// }

// function add(x, y) {
//   return x + y;
// }

// function add2(fn1, fn2) {
//   return add(fn1(), fn2());
// }

// console.log(add(foo(), bar()));
// console.log(add2(foo, bar));

//2
// function foo(x) {
//   return function() {
//     return x;
//   };
// }

// function add(x, y) {
//   return x + y;
// }

// function add2(fn1, fn2) {
//   return add(fn1(), fn2());
// }

// console.log(add(foo(10)(), foo(42)()));
// console.log(add2(foo(10), foo(42)));

// 3 addn - with loop
// function foo(x) {
//   return function() {
//     return x;
//   };
// }

// function add(x, y) {
//   return x + y;
// }

// function add2(fn1, fn2) {
//   return add(fn1(), fn2());
// }

// function addn(arr) {
//   var sum = 0;
//   for (var i = 0; i < arr.length; i++) {
//     sum = add2(arr[i], foo(sum));
//   }

//   return sum;
// }

// let result = addn([foo(1), foo(2), foo(3), foo(4)]);
// console.log(result);

// 4 addn - with recursion
// function foo(x) {
//   return function() {
//     return x;
//   };
// }

// function add(x, y) {
//   return x + y;
// }

// function add2(fn1, fn2) {
//   return add(fn1(), fn2());
// }

// function addn(arr) {
//   if (arr.length === 0) {
//     return add2(foo(0), foo(0));
//   }
//   if (arr.length === 1) {
//     return add2(arr[0], foo(0));
//   }
//   if (arr.length === 2) {
//     return add2(arr[0], arr[1]);
//   }
//   return addn(
//     [
//       function() {
//         return add2(arr[0], arr[1]);
//       }
//     ].concat(arr.slice(2))
//   );
// }

// let result = addn([foo(1), foo(2), foo(3), foo(4)]);
// console.log(result);

//5 reduce

// function foo(x) {
//   return function() {
//     return x;
//   };
// }

// function add(x, y) {
//   return x + y;
// }

// function add2(fn1, fn2) {
//   return add(fn1(), fn2());
// }

// function addn(arr) {
//   return arr.slice(1).reduce(function(prev, cur) {
//     return function() {
//       return add2(prev, cur);
//     };
//   }, arr[0])();
// }

// let result = addn([foo(1), foo(2), foo(3), foo(4)]);
// console.log(result);

//6 map + reduce
// function foo(x) {
//   return function() {
//     return x;
//   };
// }

// function add(x, y) {
//   return x + y;
// }

// function add2(fn1, fn2) {
//   return add(fn1(), fn2());
// }

// function addn(arr) {
//   return arr.map(foo).reduce(function(prev, cur) {
//     return function() {
//       return add2(prev, cur);
//     };
//   }, foo(0))();
// }

// let result = addn([1, 2, 3, 4]);
// console.log(result);
