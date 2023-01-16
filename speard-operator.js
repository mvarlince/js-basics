const primeNumber = [2,3,5,7,11,13]

const clog = (label, log) => console.log(label, ": ", log)

//const newArray = primeNumber //newArray is referencing primeNumber

// clog("new array", newArray)
// clog('Original array', primeNumber)

// primeNumber.push(17)

// clog("new array", newArray)
// clog('Original array', primeNumber)

// const newArray1 is its own thing. No reference to primeNumber
const newArray1 = [...primeNumber]

// clog("new array", newArray1)
// clog('Original array', primeNumber)
// primeNumber.pop()
// clog("new array - pop", newArray1)
// clog('Original array - pop', primeNumber)



// Same thing for objects
// const newObject = {...ogObject}

// const ogObject = {
//     name: 'Ser',
//     gender: 'fridge'
// }

// extrapulates the values in array primeNumber
const mathMax = Math.max(...primeNumber)
clog("Math Max", mathMax)