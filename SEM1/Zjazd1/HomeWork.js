// 1) From years in array check for leap years [1974, 1900, 1985, 2000]

let years = [1974, 1900, 1985, 2000]

for (let i = 0; i < years.length; i++) {
  let year = years[i]
  if (((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)) {
    console.log(year + " is a leap year");
  }
  else {
    console.log(year + " is not a leap year");
  }
}


// 2) Calculate factorial of 7.
let factorialOf = 8
let factorial = 1

for (let i = 1; i <= factorialOf; i++) {
  factorial = factorial * i
}

console.log('Factorial of ' + factorialOf + ' is: ' + factorial)

// 3) Calculate the sum of the odd items [1,6,23,8,4,98,3,7,3,98,4,98]
let numbers = [1,6,23,8,4,98,3,7,3,98,4,98]
let oddNumbersSum = 0

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2) {
    oddNumbersSum += numbers[i]
  }
}

console.log('The sum of odd numbers equals ' + oddNumbersSum)

// 4) Choose highest and lowest values from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. One loop run.
let values = [1,6,23,8,4,98,3,7,3,98,4,98]
let highestValue = values[0]
let lowestValue = values[0]

for (let i = 0; i < values.length; i++) {
  if (values[i] > highestValue) {
    highestValue = values[i]
  }
  
  if (values[i] < lowestValue) {
    lowestValue = values[i]
  }
}

console.log('The highest value is ' + highestValue + ' and the lowest is ' + lowestValue)

// 5) Choose longest string from the array. [‘Karol’, ‘Adam’,’Rogowski’,’Politechnika’,’Super’,’Weekend’]. One loop run
let strings = ['Karol', 'Adam', 'Rogowski', 'Politechnika', 'Super', 'Weekend']
let longestValue = strings[0]

for (let i = 0; i < strings.length; i++) {
    const element = strings[i]

    if (element.length > longestValue.length) {
        longestValue = element
    }
}

console.log('The longest value is ' + longestValue)

// 6) Choose all the indexes on the highest value from the given array. [1,6,23,8,4,98,3,7,3,98,4,98]. 2 loop runs.
//
// ----- Pierwszy sposób ------
let values = [1,6,23,8,4,98,3,7,3,98,4,98]
let maxValue = values[0]

for (let index = 0; index < values.length; index++) {
    const element = values[index];
    

}

// ----- Drugi sposób ------
let arrayValues = [1,6,23,8,4,98,3,7,3,98,4,98]
let maxValue = Math.max(...arrayValues)

let arrayMaxValueIndexes = []
let i = 0;

while (i<arrayValues.length) {
    let position = arrayValues.indexOf(maxValue, i)
    arrayMaxValueIndexes.push(position)
    i = position
    i++
}

console.log(`Highest value ${maxValue} has indexes: ${arrayMaxValueIndexes}`);

// ----- Trzeci sposób (który nie działa w jednym przeypadku) ------
// Jeżeli najwyższy element będzie w indexie 0 [100,6,23,8,4,98,3,7,3,98,4,98]
// trzeba zmienić wartość logiczą flasy 0 na np. -1
let arr = [1,6,23,8,4,98,3,7,3,98,4,98]
let highest = Math.max(...arr)

let indexes = arr.map(function(el, i) {return el === highest ? i : 0} )

indexes = indexes.filter(function(el) {
    return el
})

console.log(`Highest value ${highest} has indexes: ${indexes}`);


// 7) Calculate average value from the given array for even numbers [1,6,23,8,4,98,3,7,3,98,4,98]
let table = [1,6,23,8,4,98,3,7,3,98,4,98]
let sum = 0
let count = 0

for (let index = 0; index < table.length; index++) {
    const element = table[index];
    
    if (element % 2 === 0) {
        sum += element
        count++
    }
}

let average = sum/count

console.log(average)

// 8) Calculate average value of items at even indexes. Zero is not considered to be even number. [1,6,23,8,4,98,3,7,3,98,4,98]
// 9) With a given start value of 0. Iterate the array and add even items and subtract odd ones.
