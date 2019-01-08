// I could've loaded the contents of json file as string and then parse using JSON.parse(...)
// BUT since i use NodeJS to test these scripts, i won't bother writing file reading method.
// Instead, I just use require() to load json file with data.
const jsonFile = require("./Data.json");

// console.log(file);

//Ex. 3.b
function DetailsOfPayent(type, company, date) {
  this.Type = type;
  this.company = company;
  this.date = date;
}

function MainEntry(index, id, cost, detailsOfPayent) {
  this.index = index;
  this._id = id;
  this.cost = cost;
  this.detailsOfPayent = new DetailsOfPayent(
    detailsOfPayent.Type,
    detailsOfPayent.company,
    detailsOfPayent.date
  );
}

// Ex. 3.c
function maptoObjects(collection) {
  return collection.map(
    (value, index) =>
      new MainEntry(value.index, value._id, value.cost, value.detailsOfPayent)
  );
}

// Ex. 3.d.i
function getAnnualCost(collection, year) {
  let result = 0;
  return collection
    .filter(entry => entry.detailsOfPayent.date.split("-")[2] === String(year))
    .reduce(
      (accumulator, currentEntry) => accumulator + currentEntry.cost * 1, //Neat trick - instead of parseFloat(string) just mul string * 1
      result
    );
}

// Ex. 3.d.iv and v
function getEntriesCost(collection) {
  let entriesCost = {};

  for (const key in collection) {
    if (collection.hasOwnProperty(key)) {
      const entries = collection[key];
      // Sum all entries costs and add as to object
      entriesCost[key] = entries.reduce(
        (accumulator, currentEntry) =>
          accumulator + parseFloat(currentEntry.cost),
        0 // This is initial value for reduce() - it's necessary
      );
    }
  }
  return entriesCost;
}

function groupEntriesByMonth(collection) {
  let sortedPayments = {};
  collection.forEach(element => {
    // let _date = new Date(element.detailsOfPayent.date);
    // Ain't gonna work, cuz in JSON format is "09-07-2014"
    // Fucker accepts smth like "2014-09-07"

    // Hardcore string splitting mambojumbo
    let _splittedDate = element.detailsOfPayent.date.split("-");
    let _groupDate = _splittedDate[1] + "-" + _splittedDate[2];

    // If group doesn't exist - create it
    if (typeof sortedPayments[_groupDate] == "undefined") {
      sortedPayments[_groupDate] = [];
    }

    // Append element to appropriate group
    sortedPayments[_groupDate].push(element);
  });

  return sortedPayments;
}

const objCollection = maptoObjects(jsonFile);

// console.log(maptoObjects(jsonFile));
console.log(getAnnualCost(objCollection, 2015));
console.log(groupEntriesByMonth(objCollection));

// Ex. 3.d.iv
console.log(getEntriesCost(groupEntriesByMonth(objCollection)));
// Ex. 3.d.v
console.log(getEntriesCost(groupEntriesByMonth(objCollection)));
