// const person = {
//     firstName: 'Varlince',
//     lastName: 'Meran',
//     age: 47
// }


// arrays are auto-increment and 0 index
// key and value

const personArray = [
    'Varlince',
    'Sohn',
    26
]

// mutate a value in array
personArray[0] = 'Tony'
// add to the array - enter index that doesn't already exist in the array.
personArray[5] = 'Tony'


const firstName = personArray[0] + ' ' + personArray[1]

console.log(personArray)

console.log(firstName)

