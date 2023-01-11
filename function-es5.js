/* 

const person = {
    firstName: 'Varlince',
    lastName: 'Meran'
}
                    //parameters
function studentName(propFirstName, propLastName){
    const firstName = propFirstName
    const lastName = propLastName
    const fullName = firstName + ' ' + lastName

    return fullName;
}

console.log(studentName('Sir','Ton'))
console.log(studentName('Saint','Mary'))

*/

/*

// create function
function sayHello(firstName){

    console.log('Hi ' + firstName)
}

//invoke function
sayHello('Varlince')



// if argument is blank, get default 'Natasha'.
function sayHello(firstName = 'Natasha'){

    console.log('Hi ' + firstName)
}

//invoke function
sayHello()




function sumAdd(x = 0,y = 0){
    let sum = x + y;
    return sum;
}

console.log(sumAdd(10,5))


*/




// FUNCTIONS REVIEW

// 4 types of functions:
// 1. DO SOMETHING / NO PARAMS
// 2. DO SOMETHING / WITH PARAMS
// 3. RETURN SOMETHING / NO PARAMS
// 4. RETURN SOMETHING / WITH PARAMS

// 1. Example
function sayHelloWorld(){
    console.log('Hello World!')
}

sayHelloWorld()

// 2. Example
function greetFriend(name) {
    console.log('Hello ' + name)
}

greetFriend('Renaldo')

// 3. Example
function addTwoPlusTen(){
    return sum = 2 + 10
}

console.log(answer = addTwoPlusTen())

// 4. Example
function addTwoNumbers(a,b){
    return console.log(a + b)
}

addTwoNumbers(2,4)

// Real world type example
function calculateSalesTax(subtotal, taxRate){
    return console.log((subtotal * taxRate).toFixed(2))
}

calculateSalesTax(100, 0.07)