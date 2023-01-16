const clog = (lable,log) => {
    console.log(`${label}: ${log}`)
}

const person = {
    fname: 'hobo'
}


// exporting a variable and a function
module.exports.person1 = person
module.exports.clog = clog 

// export module from the main source page