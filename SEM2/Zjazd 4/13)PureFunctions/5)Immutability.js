//1
// let x = 1;
// x++;

// const y = 1;
// y++;

//const z = [1, 2];
//z = 10;
//z = [3, 4];
//z[0] = 3;
// z[1] = 4;
//z.length = 0;
//console.log(z);

//const w = Object.freeze([1, 2]);
//w = 10;
//w = [3, 4];
//w[0] = 3;
//w.length = 0;
//console.log(w);

//2

// const z = [1, 2];
// const w = Object.freeze(z);
// z[0] = 3;
// w[0] = 3;
// console.log(z);
// console.log(w);

// const z = [1, 2];
// z[0] = 3;
// const w = Object.freeze(z);
// z[0] = 6;
// w[0] = 6;
// console.log(z);
// console.log(w);

// const z = [1, 2];
// let temp = z;
// const w = Object.freeze(temp);
// z[0] = 3;
// temp[0] = 3;
// w[0] = 3;
// console.log(z);
// console.log(w);

// const z = [1, 2];
// z = z;
// z = Object.freeze(z);

//3
// let doubleMe = ar => {
//   for (let i = 0; i < ar.length; i++) {
//     ar[i] *= 2;
//   }
// };
// let myAr = [0, 1, 2];
// doubleMe(myAr);
// console.log(myAr);

// let doubleMeImmutableStyle = ar => {
//   let result = [];
//   for (let i = 0; i < ar.length; i++) {
//     result.push(ar[i] * 2);
//   }
//   return result;
// };
// let myAr = [0, 1, 2];
// console.log(doubleMeImmutableStyle(myAr));
// console.log(myAr);
