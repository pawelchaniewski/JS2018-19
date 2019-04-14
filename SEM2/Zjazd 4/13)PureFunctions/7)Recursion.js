//1
// function s() {
//   var result = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     result += arguments[i];
//   }

//   return result;
// }

// console.log(s(1, 2, 3));

//2
// function s() {
//   var args = [].slice.call(arguments);
//   if (args.length <= 2) {
//     return args[0] + args[1];
//   }

//   return args[0] + s.apply(null, args.slice(1));
// }

// console.log(s(1, 2, 3));

//3
function s(...args) {
  if (args.length <= 2) {
    return args[0] + args[1];
  }

  return args[0] + s(...args.slice(1));
}

console.log(s(1, 2, 3, 4));
