//let ids = [1,2,3];
//let ids = [1,2];
let ids = [1,2,3,4];
// let [id1, id2, id3] = ids;
// console.log(id1);
// console.log(id2);
// console.log(id3);

// let [mainId, ...remainingIds] = ids;

// let mainId;
// let [, ...remainingIds] = ids;

let [mainId,, ...remainingIds] = ids;

console.log(mainId);
console.log(remainingIds);