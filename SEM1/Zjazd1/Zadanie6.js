let arrayM=[1,6,23,8,4,98,3,7,3,98,4,98];
maxArray = Math.max.apply(null, arrayM);
let arrayNew=[];
let i=0;
while (i<arrayM.length) {
    let positionArray = arrayM.indexOf(maxArray, i)
    arrayNew.push(positionArray);
    i=positionArray;
    i++
}
console.log(`Position of number ${maxArray} are ${arrayNew}`);