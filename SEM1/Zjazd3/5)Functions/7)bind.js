let obj = {
    id:1,
    getId: function(){
        return this.id;
    }
}

let contextObject = {id:2};
let newGetId = obj.getId.bind(contextObject);

console.log(newGetId());

