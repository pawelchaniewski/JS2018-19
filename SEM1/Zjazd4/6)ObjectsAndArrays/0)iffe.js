//1 
// let dataObject = {
//     id:1,
//     data: 'example data'
// }
// var proxy = (function(foo){
//     return { 
//         getData: function(){
//             return foo;
//         },
//         setData: function(val) {
//             foo.data = val;
//         }
//     }
// })(dataObject);

// console.log(proxy.getData()); 
// proxy.setData('changed data');
// console.log(proxy.getData()); 
// console.log(dataObject);

//2

let dataObject = {
    id:1,
    data: 'example data'
}

var proxy = (function(foo){
    return { 
        getData: function(){
            return foo;
        },
        setData: function(val) {
            foo.data = val;
        }
    }
})(Object.assign({},dataObject));

console.log(proxy.getData()); 
proxy.setData('changed data');
console.log(proxy.getData()); 
console.log(dataObject);
