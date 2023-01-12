function getNameOfMonth(monthNumber){
    switch(monthNumber){
        case 1 :
            return 'Jan'
        case 2 :
            return 'Feb'
        case 1 :
            return 'March'
        default:
            return 'Error: Invalid Month'   
    }
}

try{
    console.log(getNameOfMonth(5))
}
catch (error){
    console.error(error)
}

