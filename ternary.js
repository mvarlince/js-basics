// Ternary doesn't really replace SWITCH but if else

const gender = 'male'

// ? - then
// : - else
               // if               then greeting = else  greeting = 
const greeting = (gender === 'male') ? 'Hello sir' : 'Hello maam'

//greeting is now protected bc it is a const. if it was else..if statement, it would be let

console.log(greeting)



/*
ANOTHER EXAMPLE
*/

const age = 19

const message = (age >= 21)
                    ? 'Drink up'
                    : 'Have some water.'

console.log(message)


// EXTRA FOR EXPERTS
const message2= (age >= 21)
                ? 'Drink all you want.'
                : (age > 18)
                    ? 'Have some more water'
                    : 'Please get out'
//                : 'where\'s your stamp?'

console.log(message2)