
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