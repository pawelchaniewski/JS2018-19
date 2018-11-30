
/* **********************************
Create an iffe that returns an object with three fields: variable value, function showValue() and function reverseValue(). 
Calling functions either logs the value or reverse it in an object. 
If value was not provided yet or is empty showValue function is to return information about that. 
Value type string or number if number to (*(-1)) is string can be converted to umber do so.  
*********************************** */

// Arrow function can return object
// but remember about ' labeled statement '
// thus use ({}) instead of just {}
let obj = val => ({
    // Check THIS out ಠ_ಠ
    // remember to use this._val when referencing inside object
    _val: val,
  
    // Shorten version of showValue: showValue() {}
    showValue() {
      (this._val === undefined) ? console.log('No Variable!') : null;
      return this._val
    },
    reverseValue() {
      switch (typeof this._val) {
        case 'string':
          // Try: '1234t1337' - no good
          // 10 - stands for base of 10
          let parsedToInt = parseInt(this._val, 10);
          if (isNaN(parsedToInt)) { return [...this._val].reverse().join(''); };
          return parsedToInt*(-1);
        case 'number':
          return this._val*(-1);
        default:
          console.log('No Variable! - Cannot reverse!')
          return this._val;
      }
    }  
});


let instanceOfObj = obj(123456);
console.log(typeof(instanceOfObj))

console.log(obj._val)
console.log(obj('123456')._val)
console.log(instanceOfObj.showValue())
console.log(instanceOfObj.reverseValue())



/* **********************************
Change the above iffe. So that returned object doesn’t publicly allow access to value 
but instead of that gives us a function setValue(). 
Purpose of this function is quite easy to grasp. Closure pattern.
*********************************** */

let obj = (function() {
  let _val;
  let setValue = (value) => _val = value;
  let showValue = function() {
    (_val === undefined) ? console.log('No Variable!') : null;
    return _val;
  };
  
  let reverseValue = (function() {
    switch (typeof _val) {
      case 'string':
        let parsedToInt = parseInt(_val, 10);
        if (isNaN(parsedToInt)) { return [..._val].reverse().join(''); };
        return parsedToInt*(-1);
      case 'number':
        return _val*(-1);
      default:
        console.log('No Variable! - Cannot reverse!');
        return _val;
    }
  });
  
  return {
    setValue,
    showValue,
    reverseValue
  };
})();

obj.setValue('haaalo');
console.log(obj.showValue());
console.log(obj.reverseValue());
