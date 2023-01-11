// Given an array of numbers, write a function to return the sum


/*
function calculateSum (arr){

    let sum = arr[0]
    let index = 1 // not starting at 0 because we got that one above

    if(index < arr.length){
        sum = sum + arr[index]
        index++
        //somehow we need to jump back to if statement
    }
    return sum
}

const myArray = [23,74, 18, 69,420]

console.log(calculateSum(myArray))

*/ 

function calculateSum (arr){

    let sum = arr[0]

    for (let i =1; i < arr.length; i++){
    sum = sum + arr[i]
    }
    // return sum
    return sum
}

const myArray = [23,74, 18, 69,420]

console.log(calculateSum(myArray))

// Writing a for loop
