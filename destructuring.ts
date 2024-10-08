const person ={
    name: "david",
    age: 23,
    hobby: "ngoding"
}

// object destructuring
const {name,age,hobby} = person
console.log(name,hobby,age)

// array destructuring
const arr = [1,2,3]
const [a,b,c] = arr
console.log(a,b,c)

const user = {
    firstName: "frengky",
    lastName: "sihombing",
    greet(){
        console.log(`hello ${this.firstName}`)
    }
}
user.greet()

console.log(Object.entries(user))

// Object.freeze(user)

console.log(user.hasOwnProperty("greet"))
console.log(Object.values(user))
//user.firstName = "andi"
//console.log(user)



