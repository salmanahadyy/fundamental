let name: string = "Andi"

let newName: string = name
name = "Budi"
console.log(name)

const arr: number[] = [1,2,3]
const newArr:number[] = arr

arr.push(4)

console.log(arr)

interface Iperson {
    nama: string
    age: number
}


const person: Iperson ={
    nama: "Andi",
    age: 25
}

const newPerson = {...person, hobby: "coding"}
newPerson.nama= "budi"

console.log(person)
console.log(newPerson)

// looping object
for (let key in person){
    console.log(key)
    console.log(person[key as keyof typeof person])
}