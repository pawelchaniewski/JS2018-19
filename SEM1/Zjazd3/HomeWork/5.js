/* **********************************
5) Create an array (by hand)
of objects and call sum() function in context of each one of them.
Sum function is to come from this object
BaseObject = { X,y, sum: function (){ return this.X+this.y}} 
*********************************** */

const arrOfObj = [
    {x: 1, y: 2},
    {x: 42, y: 5555},
    {x: -23, y: 2321},
    {x: 0, y: 000001},
    {x: 1, y: 20101010},
    {x: 4, y: -2123123213123},
    {x: 222222222222, y: 0}
]

const BaseObject = {
    x: undefined,
    y: undefined,
    sum: function (){ return this.x + this.y }
}

for (let index = 0; index < arrOfObj.length; index++) {
    const element = arrOfObj[index];
    
    console.log(BaseObject.sum.call(element))
}