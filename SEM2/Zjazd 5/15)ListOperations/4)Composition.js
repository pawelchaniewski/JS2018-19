function mult(x, y) {
  return x * y;
}

function compose(arr, fn, initial) {
  var result = initial;
  for (var i = 0; i < arr.length; i++) {
    result = fn(result, arr[i]);
  }

  return result;
}

let result = compose(
  [1, 2, 3, 4],
  mult,
  1
);

console.log(result);
