
// const number =[
//     1,2,3,4,5
// ]

// const clog = (label, log) => console.log(label,log)

// const [a,b,c,d,e,f,g] = number

// clog('destructure', b)

// clog('destructure', c)
// clog('destructure', g)


const person = {
    firstname: 'Varlince',
    lastname: 'Meran',
    age: 26,
    hair: 'black',
    eye: 'brown',
    gender: 'table'
}

// const firstname = person.firstname
// const age = person.age
// const eye = person.eye

const {firstname, lastname, age, hair, eye, height, gender} = person

clog('hair', hair)