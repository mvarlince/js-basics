// Given any array of numbers (all will be > 0),
// write a function that returns the number of odd
// numbers in the array.

function countOddNumbers(list) {
    let oddNumbers = []
    for (let i = 0; i < list.length; i++){
    if (list[i] % 2 != 0){
        oddNumbers.push(list[i]) 
        }
    }
    return oddNumbers.length
  }
  
const myNums = [17, 24, 69, 86, 42, 13, 11]
  
const numOdd = countOddNumbers(myNums) // should return 4
  
console.log(numOdd)
