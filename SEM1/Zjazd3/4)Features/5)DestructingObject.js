var person = {
    id : 1,
    name : 'Karol'
}

// let { id, name } = person;
// console.log(id,name);

let id, name;
// {id, name} = person;
// console.log(id,name);

({id, name} = person);
console.log(id,name);

// let id, name, year;
// ({id, name,year} = person);
// console.log(id,name,year);