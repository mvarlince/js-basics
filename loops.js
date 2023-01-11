// How to write a for loop

/*
	• Counter/start
	• When to stop
    What to count by*/

  /*
    for(let i = 10; i > 0; i--){
    }
    console.log(i, 'Blast off')

    */

/******** DO WHILE ********/ 
// console.log('Do while loop \n*********')

// let i =0
// do {
//     i++
//     console.log('This is #', i)
// } while(i < 5)


/******** WHILE ********/ 
// console.log('Do while loop \n*********')

// let i = 0
// while (i<10){
//     i++
//     console.log('This is number# ', i)
// }


/******** FOR LOOP WITH BREAK ********/ 
// console.log('For loop with break \n*********')

// let i = 0
// for(let i =0; i < 10; i++){
//     if (i === 5){
//         break
//     }
//     console.log('#', i)
// }

/*
let i = 0 
for(let i=0; i < 10; i++){
    (i==5) ? break
}


               // if               then greeting = else  greeting = 
const greeting = (gender === 'male') ? 'Hello sir' : 'Hello maam'
*/



/******** FOR IN LOOP ********/ 
// console.log('For IN LOOP \n*********')

// const person = {
//     fName: 'Ji',
//     lName: 'Ser',
//     age: 47
// }

// for (let i in person) {
//     console.log ('key =>', i)
//     console.log ('value =>', person[i], '\n')
// }

// for (let i in person) {
//     if (person[i] === 'Ser'){
//         break
//     }
//     console.log ('key =>', i)
//     console.log ('value =>', person[i], '\n')
// }



/******** FOR OF Array ********/ 
// console.log('For OF Array \n*********')

const car = ['crosstek','Subaru',true]

for (let i of car){
    console.log('Value =>', i)
}