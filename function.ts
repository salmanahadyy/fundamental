function reverseStr(input: string){
    return input.split("").reverse().join("")
}

const letter: string = reverseStr("hallo")

console.log(reverseStr("Hello World"))
console.log(reverseStr("jakarta"))
console.log(letter)

// function expression & rest parameters
const sum = function(a: number, b: number, ...others: number[]){
    console.log(others)
    return a+b
}

console.log(sum(10,11,1,2,3,4)) // 10 & 11 argument

// nested function
function getMessage (firstName: string){
    function sayHello(){
        return "Hello " + firstName
    }

    function welcomeMessage(){
        return "Welcome to Purwadhika"
    }

    return sayHello() + ", " + welcomeMessage()
}
console.log(getMessage("David"))

// closure function
function greeting(name: string){
    const defaultMsg: string = "Hello "
    return function(){
        return defaultMsg + name
    }
}

const greetingDavid = greeting("david")
console.log(greetingDavid())

function capitalize (str: string){
    let res: string = ""
    for (let i = 0; i < str.length; i++){
        if (i == 0 || str.charAt(i - 1) == " "){
            res += str.charAt(i).toUpperCase()
        } else {
            res += str.charAt(i).toLowerCase()
        }
    }
    return res
}

console.log(capitalize("hello world"))

// currying
function multiplier (factor: number){
    return function(num: number){
        return factor * num
    }
}

const mul4 = multiplier(4)
console.log(mul4(5)) // atau console.log(multiplier(4)(5))

// recursive function
function countDown (fromNumber: number){
    console.log(fromNumber)
    let nextNumber: number = fromNumber - 1
    if (nextNumber > 0){
        countDown(nextNumber)
    }
}
countDown(9)

// arrow function
const square = (a: number, b: number) => a*b
console.log(square(4,2))

function checkOddEven (num: number){
    if(num % 2 == 0){
        return "even"
    } else {
        return "odd"
    }
}