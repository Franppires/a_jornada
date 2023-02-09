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

// console.log(titlePL)
// [   
//     { name: 'Fabricio', age: 32, title: 'PL', test: 90 },
//     { name: 'Fabricio', age: 32, title: 'PL', test: 90 }
// ]


const ofAge = contact.filter((person) => person.age > 30)

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


const ofTest = contact.filter((person) => person.test < 50)
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

const together = contact.filter((person) => person.test < 50 && person.title == 'JR')

// console.log(together)
// [
//     { name: 'John', age: 21, title: 'JR', test: 40 },
//     { name: 'Matheus', age: 54, title: 'JR', test: 30 },
//     { name: 'Cassia', age: 65, title: 'JR', test: 20 },
//     { name: 'John', age: 21, title: 'JR', test: 40 },
//     { name: 'Matheus', age: 54, title: 'JR', test: 30 },
//     { name: 'Cassia', age: 65, title: 'JR', test: 20 },
//     { name: 'Fran', age: 32, title: 'JR', test: 20 }
// ]


const two = contact
    .filter((person) => person.age > 50)
    .map((item) => item.name)
    // .some((name) => name === 'Matheus') //true
    .some((name) => name === 'matheus') //false

console.log(two)
// [ 'Matheus', 'Cassia', 'Matheus', 'Cassia' ]