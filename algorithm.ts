// challenge

function str(kata:string) {
    return kata.split("").join(" ")
}


const exampleStr = "helloWorld"
const resultArray = str(exampleStr)
console.log(resultArray)


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
