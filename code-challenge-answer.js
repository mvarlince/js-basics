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

/*
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
*/


// given any array of numbers
// write a function that returns largest number in that array without using math.max

// numbers in array are always gonna be more than zero



function maxNum(array){
    let largest = 0
    for (i = 0; i < array.length; i++){
    // if number at index x > the one before, keep going until end of array
    if (array[i] > largest){
        largest = array[i]
    }
    }
    return largest
}

const myArray = [23,74, 18, 69,420]
console.log(maxNum(myArray))


