class User{
    firstName = ""
    #lastName = "" //privat
    static word = "hello world"

    constructor(first: string, Last: string){
this.firstName = first
this.#lastName = Last
    }
    greet(){
        console.log(`Hello ${this.firstName}`)
    }

getLastname(){
    return this.#lastName // ngeluarin privat
}

}

const user1 = new User("frengky", "sihombing")
const user2 = new User("salman","ahady")
const user3 = new User("jhon","doe")

console.log(user1,user2,user3)
console.log(user1.firstName)
user1.greet()
user2.greet()
user3.greet()

console.log(user1.getLastname())
console.log(User.word)