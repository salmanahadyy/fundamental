// // exercise 1
// function triangle (height: number){
//     let num: number = 1
//     for (let i = 1; i <= height; i++){
//         let result: string = ""
//         for (let j = 1; j <= i; j++){
//             if (num >= 10){
//                 result += `${num} `
//                 num++
//             } else{
//                 result += `0${num} `
//                 num++
//             }
//         }
//         console.log(result)
//         }
// }

// triangle(4)  

// // exercise 2
// function fizzBuzz(n:number){
//     let result =""
//     for( let i = 1; i<=n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             result += "FizzBuzz";
//         } else if (i % 3 === 0){
//             result += "Fizz"
//         } else if (i % 5 === 0){
//             result += "Buzz";
//         } else{
//             result +=i;
//         }
//         if(i<n){
//             result +=", "
//         }
//     }
//     console.log(result);
// }

// fizzBuzz(6)
// fizzBuzz(15)

// // exercise 3
// function calculateBMI(weight:number, height: number) {
//     const bmi = weight / (height * height)

//     if(bmi < 18.5){
//         return "less weight";
//     } else if (bmi >= 18.5 && bmi <= 24.9){
//         return "ideal";
//     } else if (bmi >= 25.0 && bmi <= 29.9){
//         return "overweight";
//     } else if (bmi >= 30.00 && bmi <= 39.9){
//         return "very overweight"
//     } else {
//         return "obesity"
//     }
// }

// console.log(calculateBMI(60, 2.0)) less weight
// console.log(calculateBMI(85, 1.75)) overweight

// // exercise 4
// function removeOddNumbers (numbers:number[]){
//     return numbers.filter(num => num % 2 === 0);
// }

// const arrayNumbers = [1,2,3,4,5,6,7,8,9,10]
// const evenNumbers = removeOddNumbers(arrayNumbers)
// console.log(evenNumbers)

// // exercise 5
// function str (kata: string){
// return kata.split(" ");
// }
// const exampleStr = "Hello World"
// const resultArray = str(exampleStr)
// console.log(resultArray)

function calculateStats(arR: number[]): {lowest: number, highest: number, average: number} {
    if (arr.length === 0) {
        return { lowest: 0, highest: 0, average: 0 };
    }
    
    let lowest = arr[0];
    let highest = arr[0];
    let total = 0;

    for (const num of arr) {
        if (num < lowest) {
            lowest = num;
        }
        if (num > highest) {
            highest = num;
        }
        total += num;
    }

    const average = total / arr.length;
    return { lowest, highest, average };
}

// Example usage
const arr = [12, 5, 23, 18, 4, 45, 32];
const result = calculateStats(arr);
console.log(result); // Output: { lowest: 4, highest: 45, average: 19.857142857142858 }


function calculateStats2(arr:number[]) {
    let jumlah: number = 0;
    arr.sort((a,b)=> a-b)
    for (let i = 0; i < arr.length; i++) {
         jumlah += arr[i];
        
    }
    let average: number = jumlah / arr.length
    console.log(arr[0], arr[arr.length-1], average)
}
calculateStats2(arr)

// 2
function concatenatingWord(arr1:string[]) {

    if(arr1.length === 0){
return ''
    }
    if (arr1.length === 1){
        return arr1[0]
    }

const lastWord = arr1.pop()
const joinWord = arr1.join(',')
return `${joinWord}, and ${lastWord}`
}
const arr1 = ["apple", "banana", "cherry", "date"]
const result2 = concatenatingWord(arr1)
console.log(result2)

//4
function sumArray (arr2: number[], arr3: number[]){
    return arr2.map((num, index)=> num + arr3[index])
}

const arr2 = [1,2,3]
const arr3 = [3,2,1]
const arrayResult = sumArray(arr2,arr3)
console.log(arrayResult)

//3
function secondSmallestNumbers(numbers:number[]) {
    numbers.sort((a,b) => a-b)
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] >numbers[0]) {
            return numbers[i];
        } else{
        continue;
    }


    
}
}
const numbers = [5,3,1,1,7,2,6]
numbers.sort((a,b) => a-b)
console.log(numbers)
console.log(secondSmallestNumbers(numbers))

// exercise 5
function addElement(arr:number[], num: number) {
    if (arr.includes(num)) {
        return arr;
    } else{
        arr.push(num)
        return arr
    }
}
let newArr: number[] = [1,2,3,4];
let newElement: number = 7
let arrayNum: number[]= addElement(newArr,newElement)
console.log(arrayNum)


// challenge
function pig(str:string) {
    let words = str.split(" ")
    let pigWords: string[] = words.map((word)=>{
        let firsLetter = word[0]
        let restLetter = word.slice(1)
        return restLetter + firsLetter + "ay"
    })
    console.log(pigWords);
    return pigWords.join(" ")
}
let str: string = "pig latin is cool"
console.log(pig(str))


function mixedArray(input:any[]) {
   let arr: number = 0
    for (let index = 0; index < input.length; index++) {
        if (typeof input[index] == "number") {
            arr += input[index]
        }
        
    }
    return arr
}

const mixArr: any = ["3", 1, "string", null, false, undefined, 2]
console.log(mixedArray(mixArr))