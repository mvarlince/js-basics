function sayHello(){
    console.log('Hello')
}

function sayGoodbye(){
    console.log('Say goodbye')
}

// what I want to guarantee tha Hello comes before goodbye?

function sayHelloThen(next){
    console.log('Hello there!: ')
    next()
}
sayHelloThen(() => console.log('Goodbye!'))