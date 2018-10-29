//1 basics
// let book = {
//     title: 'LOTR',
//     pages: 2745,
//     hardCover: true
// };

// console.log(book.title);
// console.log(book.pages);
// console.log(book.hardCover);

//2 object + function
// let book = {
//     title: 'LOTR',
//     pages: 2745,
//     hardCover: true
// };
// function showBookInfo(bookObject){
//     console.log(bookObject.title);
//     console.log(bookObject.pages);
//     console.log(bookObject.hardCover);
// }
// showBookInfo(book);

// function changeCover(bookObject){
//     bookObject.hardCover = !bookObject.hardCover;
//     console.log('Cover changed');
// }
// changeCover(book);
// showBookInfo(book);


//3 objects in array
// function showBookInfo(book){
//     console.log(book.title);
//     console.log(book.pages);
//     console.log(book.hardCover);
// }

// let books = [
//     {
//         title: 'LOTR',
//         pages: 2745,
//         hardCover: true
//     },
//     {
//         title: 'Witcher',
//         pages: 1266,
//         hardCover: false
//     },
//     {
//         title: 'Sherlock Holmes',
//         pages: 1950,
//         hardCover: true
//     }
// ];

// for(let i = 0; i < books.length; i++){
//     showBookInfo(books[i]);
// }

// books.forEach(function(book) {
//     showBookInfo(book);
// });

//4 out of the box
// console.log(Math.random());
// console.log(Math.random()*100);
// console.log(Math.trunc(Math.random()*100));

// let dateObj = new Date();
// console.log(dateObj);
// console.log(dateObj.toDateString());
// console.log(dateObj.toLocaleDateString());
// dateObj.setMonth(11);
// console.log(dateObj);
// dateObj.setMonth(12);
// console.log(dateObj);