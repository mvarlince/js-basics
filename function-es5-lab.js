/*
create your own person object with
first name
last name
fav color
age
hobby

create an array with your fav movie * 5

create a function that generates the following
1. hi my full name is firstn lastn. fav color is favC and love $hobby.
2. I like these 5 movies. 
3. create a math function that takes 3 parameters
*/

const person = {
    firstName: 'Varlince',
    lastName: 'Meran',
    favColor: 'Blue',
    hobby: 'cars'
}

const favMovies = [
    'Tenet',
    'Interstellar',
    '2 fast 2 furious',
    'Fun with Dick and Jane',
    'El Camino'
]

// function 1
function generateSentence (pFirstName = 'Jon', pLastName = 'Doe', pFavColor = 'insert color', pHobby = 'things') {
    console.log('Hi my full name is ' + pFirstName + ' ' + pLastName + '. My favorite color is ' + pFavColor + ' and love ' + pHobby + '.')
}

// function 2
function myFavMovies (m1,m2,m3,m4,m5) {
    console.log('These are my most fav movies: ' + m1, ', ', m2 + ', ', m3, ', ', m4, 'and ', m5)
}

// function 3
function doMath (a, b, c) {
    let sum = a + b + c;
    return sum;
}


generateSentence(person.firstName, person.lastName, person.favColor, person.hobby)
myFavMovies(favMovies[0],favMovies[1],favMovies[2],favMovies[3],favMovies[4], )
console.log('Adding three numbers: ', doMath(5,5,5))