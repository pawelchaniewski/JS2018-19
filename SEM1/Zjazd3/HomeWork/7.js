/* **********************************

7) Given an array of objects, for each object call operation() 
function in its context but from next object. 
If object is last get back to start of the array for operation function. 
In loop (for or while)

*********************************** */

var arrOfObj = [
    {
        x: 1,
        y: 'object one value',
        // Must use traditional function declaration
        operation() { return 'object one prefix ' + this.x + this.y }
        // THIS  V   Won't work, beacuse inside arrow func `this` will point at global
        // operation: () => ('object one prefix ' + this.x + this.y)
    },
    {
        x: 2,
        y: 'object two value',
        operation() { return 'object two prefix ' + this.x + this.y }
    },
    {
        x: 3,
        y: 'object three value',
        operation() { return 'object three prefix ' + this.x + this.y }
    }
]

for (let index = 0; index < arrOfObj.length; index++) {
    const element = arrOfObj[index];
    
    if ((index + 1) == arrOfObj.length) {
        // element.operation = arrOfObj[0].operation
        console.log(arrOfObj[0].operation.call(element))
    } else {
        // element.operation = arrOfObj[index+1].operation
        console.log(arrOfObj[index+1].operation.call(element))
    }

}