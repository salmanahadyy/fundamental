// challenge

function str(kata:string) {
    return kata.split("").map((item) => item == item.toUpperCase() ? ` ${item}` : item).join("").split(" ")
}


console.log(str("helloWorld"))
console.log(str("johnDoeMiller"))


function num(input:number[]) {
    input.sort((a,b)=> a-b)
    let arr : number[] = []
 let hasilAkhir = []
    for (let index = 0; index < input.length; index++) {
        arr.push(input[input.length-1-index])
        arr.push(input[index])
    }
    let hasil = new Set (arr)
    
    for(const result of hasil){
hasilAkhir.push(result)
    }
    return hasilAkhir
}
const input = [1,2,3,4,5,6]
const input2 = [11,21,22,5,30,14]

console.log(num(input))
console.log(num(input2))


function myFunc(str:string) {
const letter  = str.replace(/[\s/0-9]/g, "")
const lower = letter.replace(/[A-Z]/g,"")
return [lower.length, letter.length-lower.length]
}

console.log(myFunc("Hello Purwadhika"))
console.log(myFunc("B4ndung"))






