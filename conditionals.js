// There are three ways to make conditionals in code
// 1. if (comes in many flavors)
// 2. switch (great for many different conditions)
// 3. ternary (shorthand for if / else)

// first let's setup some variables

const age = 19;

// let's start with the most basic if statement

if (age >= 18) {
    console.log('Welcome. Come on in!')
}

// what about people that aren't yet 18?
// let's use an if..else

if (age >= 21){
    console.log('Drink Up!')
} else {
    console.log('Here\'s some water.')
}

// what if we have more than two possibilities.
// then we can use an elseif

const hour = 9;

if (hour < 11){
    console.log('Good Morning')
} else if (hour < 17){
    console.log('Good afternoon')
} else if (hour < 22){
    console.log('Good evening')
} else {
    console.log('Go to bed!')
}

// when dealing with many different functions, we often use a switch

const yourPet = 'sir'

switch(yourPet){
    case 'dog':
        console.log('woof woof')
        break
    case 'cat':
        console.log('meow meow')
        break
    case 'bird':
        console.log('chirp')
        break
    case 'fox':
        console.log('what does the fox say?')
        break
    case 'racoon':
        console.log('scream and show teeth')
        break
    case 'lizard':
    case 'snake':
    case 'turtle':
        console.log('That\'s a crazy pet yo')
        break
    default:
        console.log('Wow, I never even heard of that')
        break

}

// For more on ternaries, look at ternary.js
