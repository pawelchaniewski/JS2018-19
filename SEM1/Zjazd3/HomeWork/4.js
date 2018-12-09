
/* **********************************
Create four function definitions. One for every basic math operations and taking two input parameters. 
Create one more function. 
This function is to return calculation object. 
This object is to have parameters object field that holds two operation parameters inside (x and y). 
Function field that points to a function with math operation (defined at the beginning). 
A function setOperation() that sets the field from previous sentence and 
a Calculate function that makes calculation and returns its value. 
*********************************** */

let add = (x, y) => x + y
let substract = (x, y) => x - y
let multiply = (x, y) => x * y
let divide = (x, y) => x / y

let Calculator = function(x, y, operation) {
  let _operation = operation

  //Not really needed, but for the sake of
  //education wanted to use spread
  let input = [x, y]
  
  let setOperation = function(operation) {
    _operation = operation
  }
  
  let calculate = () => _operation(...input)
  return {
    setOperation,
    calculate
  }
}

let obj = Calculator(2, 5, add)
console.log(obj.calculate())

obj.setOperation(substract)
console.log(obj.calculate())