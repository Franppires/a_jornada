const number = [1, 15, 90, 30, 60]

const newValue = number.filter((number) => number % 2 === 0)

// console.log(newValue)
// [ 90, 30, 60 ]

const contact = [
    { name: 'John', age: 21, title: 'JR', test: 40 },
    { name: 'Fabricio', age: 32, title: 'PL', test: 90 },
    { name: 'Karem', age: 43, title: 'SR', test: 100 },
    { name: 'Matheus', age: 54, title: 'JR', test: 30 },
    { name: 'Cassia', age: 65, title: 'JR', test: 20 },
    { name: 'John', age: 21, title: 'JR', test: 40 },
    { name: 'Fabricio', age: 32, title: 'PL', test: 90 },
    { name: 'Karem', age: 43, title: 'SR', test: 100 },
    { name: 'Matheus', age: 54, title: 'JR', test: 30 },
    { name: 'Cassia', age: 65, title: 'JR', test: 20 },
    { name: 'Morris', age: 21, tille: 'JR', test: 50}, 
    { name: 'Fran', age: 32, title: 'JR', test: 20 },
]

const titlePL = contact.filter((person) => person.title === 'PL')
const ofAge = contact.filter((person) => person.age > 30)
const ofTest = contact.filter((person) => person.test < 50)


// console.log(titlePL)
// [   
//     { name: 'Fabricio', age: 32, title: 'PL', test: 90 },
//     { name: 'Fabricio', age: 32, title: 'PL', test: 90 }
// ]

// console.log(ofAge)
// [
//     { name: 'Fabricio', age: 32, title: 'PL', test: 90 },
//     { name: 'Karem', age: 43, title: 'SR', test: 100 },
//     { name: 'Matheus', age: 54, title: 'JR', test: 30 },
//     { name: 'Cassia', age: 65, title: 'JR', test: 20 },
//     { name: 'Fabricio', age: 32, title: 'PL', test: 90 },
//     { name: 'Karem', age: 43, title: 'SR', test: 100 },
//     { name: 'Matheus', age: 54, title: 'JR', test: 30 },
//     { name: 'Cassia', age: 65, title: 'JR', test: 20 },
//     { name: 'Fran', age: 32, title: 'JR', test: 20 }
// ]

// console.log(ofTest)
// [
//     { name: 'John', age: 21, title: 'JR', test: 40 },
//     { name: 'Matheus', age: 54, title: 'JR', test: 30 },
//     { name: 'Cassia', age: 65, title: 'JR', test: 20 },
//     { name: 'John', age: 21, title: 'JR', test: 40 },
//     { name: 'Matheus', age: 54, title: 'JR', test: 30 },
//     { name: 'Cassia', age: 65, title: 'JR', test: 20 },
//     { name: 'Fran', age: 32, title: 'JR', test: 20 }
//  ]