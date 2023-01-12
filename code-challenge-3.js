// Given any array of numbers (all will be > 0),
// write a function that returns the number of odd
// numbers in the array.

function countOddNumbers(list) {
    let oddNumbers = []
    for (let i = 0; i < list.length; i++){
    if (list[i] % 2){
        oddNumbers.push(list[i]) 
        }
    }
    return console.log(oddNumbers.length)
  }
  
const myNums = [17, 24, 69, 86, 42, 13, 11, 27]

countOddNumbers(myNums)
  

