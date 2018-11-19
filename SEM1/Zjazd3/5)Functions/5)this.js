//1

// (function(){
//     console.log(this);
// })();


//2

let obj = {
    id:1,
    getThisId: function(){
        let id =2;
        return this.id;
    },
    getId: function(){
        let id =2;
        return id;
    }
}

console.log(obj.getThisId());
console.log(obj.getId());