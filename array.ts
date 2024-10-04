const arr: string[] = ["a","k","u"]
const arr2: any[] = new Array("A","b","c")
const b: string = 'baik'

console.log(arr2)
console.log(arr[2])
console.log(b[2])
console.log(arr.length)
console.log(arr.join('.'))

// menambahkan value dibelakang
arr.push("d")

// menambahkan value didepan
arr.unshift("E")

// menghapus value terakhir
arr.pop()

//menghapus value pertama
arr.shift()

// menghapus / menambahkan index ke ?
arr.splice(2,0,"z")

console.log(arr)

const numArr: number[] = [1,3,2,100,21]

numArr.sort((a,b) => a-b) // sort asc
// numArr.sort((a,b) => b-a) // sort desc

console.log(numArr)
arr.sort() // sort asc string
// arr.sort().reverse() // sort desc string

const oddNumber: number[] = numArr.filter((item) => item % 2 == 1 && item > 2)

console.log(oddNumber)
console.log(oddNumber.find((item) => item == 3))
console.log(oddNumber.findIndex((item) => item == 3))
console.log(oddNumber.includes(3))

const str: string = "Purwadhika Bandung"

console.log(str.split(" ").join(''))
console.log(str.split("").toString())

const newArr: number[] = [10,20,30,40,50]
const newArr2: number[] = newArr.map((item) => item += 5)
newArr.forEach((item, index)=> {
    console.log(item,index);
})

// return array baru
newArr.map((item, index)=> {
    console.log(item,index);

})
console.log(newArr2)

// looping for of (array)
for (let item of newArr) {
    console.log(item);
} 