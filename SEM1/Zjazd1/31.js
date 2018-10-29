// // const numArray = [1,6,23,8,4,98,3,7,3,98,4,98];

// // function sumOfOddNumbers(array) {
// //     let sumOfOddNumbers = 0;
// //     for(let i = 0; i<array.length; i++){
// //         if(array[i]%2!=0) {
// //             sumOfOddNumbers = sumOfOddNumbers + array[i];
// //         }
// //     }
// //     return sumOfOddNumbers;  
// // }

// // console.log(sumOfOddNumbers(numArray));

// // let liczby = [1,6,23,8,4,98,3,7,3,98,4,98]
// // let max = liczby[0]
// // let min = liczby[0]

// // let max2 = Math.max(...liczby);

// // for (let i = 0; i < liczby.length; i++) {
// //     if(liczby[i]<min){
// //         min = liczby[i]
// //     }
    
// //     if(liczby[i]>max){
// //         max = liczby[i]
// //     }
// // }
// // console.log(max2)

// //5

// // let array = ['Karol', 'Adam','Rogowski','Politechnika','Super','Weekend'];
// // let longestWord = array[0];
// // for (let index = 1; index < array.length; index++) {
// //     const element = array[index];
// //     if (element.length>longestWord.length) {
// //         longestWord = element
// //     }
// // }
// // console.log(longestWord)

// //6


// //////////////////Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.  

// // let numbers = [1,6,23,8,4,98,3,7,3,98,4,98];
// // let maxNumber,	// dekl. zmiennej pomocniczej trzymajacej najmniejszą liczbę, pusta zmienna
// //     number = 0;	// dekl. zmiennej trzymającej naszą liczbę z danego indeksu tablicy
// // let indexTab = []; // dekl. zmiennej tablicowej trzymajacą indeksy z najwiekszą liczbą, z początku jest pusta

// // for (let i = 0; i < numbers.length; i++){	// petla która iteruje kazdy element tablicy
// // 	number = numbers[i];	// przypisujemy liczbę z indeksu tablicy do naszej zmienej pomocniczej
  
// //   if (!maxNumber || number > maxNumber) {	//warunek logiczny LUB. 1 warunek: True -> jesli maxNumber jest pusty (negacja); 2 warunek: True -> jesli number jest większy niż aktualny maxNumber
// //     maxNumber = number;	// przypisz number do zmiennej pomocniczej maxNumber (liczba pod zmienna number stał się naszą aktualnie najwiekszą liczbą)
// //   }
// // }

// // for (let i = 0; i < numbers.length; i++){		//petla która iteruje kazdy element tablicy
// // 	number = numbers[i];	// przypisuje liczbe z aktualnie rozpatrywanego indeksu tablicy do naszej zmiennej p.
  
// //   if(number == maxNumber){		// warunek sprawdzajacy czy dana liczba w indeksie jest równa naszej najwiekszej liczbie
// //   	indexTab.push(i);	// wrzuc numer indeksu z najwiekszą liczbą do naszej tablicy indeksów
// //   }
// // }

// // console.log(indexTab);

// let liczby = [1,6,23,8,4,98,3,7,3,98,4,98];

// let sumEven = 0;
// for (let i = 0; i< liczby.length; i++){
//     if(liczby[i]%2==0){
//         sumEven+= liczby[i]
//     }
//     else {
//         sumEven-= liczby[i]

//     }
// }
// console.log(sumEven);


// let table = [1,6,23,8,4,98,3,7,3,98,4,98, 7, 6, 7, 19, 20];

function randNumber(min,max){
    return Math.floor(Math.random() * (max+1)) + min;
}

// function getLowerAtRandom(array, attempts){
//     let tempTable = [];
//     for (let index = 0; index < attempts; index++) {
//         tempTable.push(array[randNumber(0,array.length-1)]); 
//     }
//     console.log(tempTable);
//     return Math.min(...tempTable);
// }

// console.log(getLowerAtRandom(table,5));



for(let i=0; i<17;i++){
  console.log(randNumber(0,4));  
}