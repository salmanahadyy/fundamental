interface Icar{
brand: string
model: string
price?: number // ('?') boleh ada atau ga ada
}

/* cara kedua
type Car = {
brand: string,
model: string,
price: number
}
*/


const car: Icar ={ // const car: Car
    brand: "BMW",
    model: "M135i xDrive",
    price: 80000000
}

interface User {
    name: string
    hobby?: string
    greeting(): void
    address?: {
        street: string
        country: string
    }


}

const user: User = {
    name: "David", // properti
    greeting(){ // method
        console.log("Hello")
    }
}
console.log(user.name) // "." (dot) cara pertama
console.log(user["name"]) // cara kedua

user.hobby = "ngoding"
console.log(user)

delete user.hobby 
console.log(user)

user.address = {
    street: "braga",
    country: "indonesia"
}

// optional chaining
console.log(user.address?.street)


console.log(Object.keys(user))