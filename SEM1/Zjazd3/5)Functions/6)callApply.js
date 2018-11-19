//1
// let obj = {
//     id:1,
//     getId: function(){
//         return this.id;
//     }
// }

// let contextObject = {id:2};
// console.log(obj.getId());
// console.log(obj.getId.call(contextObject));


//2
// let obj = {
//     id:1,
//     getId: function(par1, par2){
//         return par1+ this.id+par2;
//     }
// }

// let contextObject = {id:2};

// console.log(obj.getId('p','s'));
// console.log(obj.getId.apply(contextObject,
// ['prefix ',' sufix']));