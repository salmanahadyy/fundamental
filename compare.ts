const obj1 = { name: "andi"}
const obj2 = {name: "andi"}

console.log(obj1 == obj2) // false

const arr1 = [1,2,3]
const arr2 = [1,2,3]
console.log(arr1 == arr2) // false


const null1 = null
const null2 = null
console.log(null1 == null2) // null object primitive

const target = { a:1, b: 2}
const source = { b:4, c: 5}
const final = Object.assign(target, source)
Object.assign(target,{d:10})


console.log(target)
console.log(final)
