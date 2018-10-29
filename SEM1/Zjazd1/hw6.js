// 6)	Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.




let arr = [98, 6, 23, 8, 4, 98, 3, 7, 3, 98, 4, 98];
let highest = Math.max(...arr);
let indexes = arr.map(function(el, i) {
    let result; 
    if (el == highest) {
        result = i;
    }
    else{
        result =-1;
    }

    return result;
});
indexes = indexes.filter(function(el){
    return el>=0;
});


console.log(`Highest value ${highest} has indexes: ${indexes}`);
