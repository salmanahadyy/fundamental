// factorial
const n: number = 4
let result: number = 1

for (let i = n; i > 0; i--) {
    result *= i
}
console.log(result)

const N: number = 6
let hasil: number = 1

for (let I = N; I > 0; I--){
    hasil *= I
}
console.log(hasil)

// odd or even number
let angka: number = 25
if (angka % 2 == 0){
    console.log("even number")
} else {
    console.log("odd number")
}

// find the sum
let hasil2: number = 0
for (let m = 5; m > 0; m--){
    hasil2 += m
}
console.log(hasil2)

let hasil3: number = 0
for (let r = 3; r > 0; r--){
     hasil3 += r
 } console.log (hasil3)

 // fibonnaci
 let hasil4: number = 0
 let angka1: number = 0
 let angka2: number = 1
 let fibonnaci: number = 15
 for( let y = 1; y < fibonnaci; y++ ) {
    hasil4 = angka1 + angka2
    angka1 = angka2
    angka2 = hasil4
 } 
 console.log(hasil4)

 const num: number = 7

 let divider: number = 0
 for (let a = 1; a <= num; a++){
    if (num % a == 0) {
        divider++
    }
 }
 console.log(divider==2 ? `${num} is a prime number` : `${num} is not a prime number`)