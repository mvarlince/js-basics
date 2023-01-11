// const firstName = 'Varlince'
// const lastName = 'Meran'

// basic object structure
const person = {
    firstName: 'Varlince',
    lastName: 'Meran',
    age: 47
}

//dot notation
person.firstName

//bracket notation
person['fistName']

console.log('hello ' + person.firstName + ' ' + person.lastName) 
console.log("age:", person.age)

// mutate a value in an object
person.firstName = 'Jude'

// adding property to an object
person.height = 180

// delete property in an object
delete person.height


console.log("person object", person)