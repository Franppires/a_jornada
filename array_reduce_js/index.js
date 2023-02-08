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


//--------------FOR-------------------
let sumTest = 0 

for (let x = 0; x < contact.length; x++) {
    sumTest += contact[x].test;
}


// console.log(sumTest)
// 280




//--------------FOREACH-------------------

let sumTest2 = 0 

contact.forEach(element => {
    sumTest2 += element.test
});


// console.log(sumTest2)
// 280




//--------------REDUCE SIMPLES-------------------

const sumTest3 = contact.reduce((acc, item) => {
    // return acc + 1 quantidade d objetos no array 
    return acc + item.test
}, 0)


// console.log(sumTest3)
// 280




//--------------REDUCE MAIS-------------------

const reduceDosBeginners = contact.reduce((acc, item) => {
    return {...acc, ofLegalAge: 10}
}, {sumTest3: 0, ofLegalAge: 0, minor: 0})


// console.log(reduceDosBeginners)
// // { sumTest3: 0, ofLegalAge: 10, minor: 0 }




const together = contact.reduce((acc, item) => {

    const minor = acc.minor < item.age ? acc.minor : item.age;
    const ofLegalAge = acc.ofLegalAge > item.age ? acc.ofLegalAge : item.age;
    const sumTest = acc.sumTest + item.test

    return { minor, ofLegalAge, sumTest}

}, {minor: undefined, ofLegalAge: 0, sumTest: 0})


// console.log(together)
// { minor: 21, ofLegalAge: 65, sumTest: 280 }




const positions = contact.reduce((acc, item) => { 
    if (acc[item.title] == null) { 
        acc[item.title] = 1
    } else { 
        ++ acc[item.title]
    }

    return acc

}, {})


// console.log(positions)
// { JR: 3, PL: 1, SR: 1 }




const byAge = contact.reduce((acc, item) => { 
    const age = item.age

    if (acc[age] == null) acc[age] = []
        acc[age].push(item.name)

    return acc
}, {})


// console.log(byAge)

// {
//     '21': [ 'John', 'John', 'Morris' ],
//     '32': [ 'Fabricio', 'Fabricio', 'Fran' ],
//     '43': [ 'Karem', 'Karem' ],
//     '54': [ 'Matheus', 'Matheus' ],
//     '65': [ 'Cassia', 'Cassia' ]
//   }