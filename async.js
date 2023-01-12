//async examples: 
// console.logs will run first bc settimeout is seen as slower item

function doSomething(){
    console.log('SOMETHING')
}

console.log('Start')

setTimeout(doSomething, 2000)

console.log('End')

// function doesn't need a name = anonymous functions
setTimeout(function (){
    console.log('Do something else: ')
})

// structure for shorthanded functions
// (params) => { }
setTimeout(() => {
    console.log('Di something else else: ')
})

const myFuncAdd = (a,b) => {
    return console.log(a + b)
}

myFuncAdd(2,4)

// if only one parameter, no need for parantheses
const noParantheseFunc = a => {
    return console.log(a + 2)
}

noParantheseFunc(5)

// IF THE FUNCTION IS ONLY ONE LINE, 
// WE CAN LEAVE OFF THE {} AND THE RETURN

const squareNum = a => {
    return console.log(a*a)
}
// same as

const squareNum2 = a => console.log(a*a)
squareNum2(2)