//1
// let y = 2;
// let z;

// function f(x) {
//   y++;
//   z = x * y;
// }

// f(10); // 10 =>30, 3
// console.log("y " + y);
// console.log("z " + z);

// f(10); // 10 => 40,4
// console.log("y " + y);
// console.log("z " + z);

//2
// function bar(x, y) {
//   let z;

//   f(x);
//   return [y, z];

//   function f(x) {
//     y++;
//     z = x * y;
//   }
// }

// let res1 = bar(10, 2);
// console.log("res1");
// console.log(res1);

// let res2 = bar(10, res1[0]);
// console.log("res2");
// console.log(res2);
