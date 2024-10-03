// const input: number = 9
// const limit: number = 10

// for (let i = 1; i<= limit; i++){
//     console.log(`${input} x ${i} = ${input * i}`)
// }

/*
const str: string = 'kilo'
const reverse = str.split('').reverse().join('');
console.log(str);
console.log(reverse);
*/

const str: string = "hello"
let reverseStr = ""

for (let i = str.length - 1; i >= 0; i--) {
    reverseStr += str.charAt(i)
}

console.log(str == reverseStr ? "Palindrome" : "not Palindrome");

let cm: number = 100000

console.log(`${cm / 100000}km`)

let num = 1000
let text = num.toLocaleString()
console.log(`Rp. ${text}`)

const s1: string = "hello world"
let s2: string = ""

for (let i = 0; i < s1.length; i++) {
    if (i === 0 || s1[i - 1] === ' ') {
        s2 += s1[i].toUpperCase()
    } else {
        s2 += s1[i]
    }
}

console.log(s2)

function removeFirstOccurrence(inputString: string, searchString: string): string {
    const index = inputString.indexOf(searchString);

    if (index === -1) {
        // If the search string is not found, return the original string
        return inputString;
    }

    // Remove the first occurrence of the search string
    const before = inputString.slice(0, index);
    const after = inputString.slice(index + searchString.length);

    return before + after;
}

// Example usage:
const originalString = "Hello world";
const searchString = "ell";
const result = removeFirstOccurrence(originalString, searchString);
console.log(result); // Output: "Ho world"

let letter: string = 'The QuiCk BrOwN Fox'
let y: string = ''
for (let i = 0; i <= letter.length; i++) {
    if (letter.charAt(i) === letter.charAt(i).toUpperCase()) {
        y += letter.charAt(i).toLowerCase()
    } else {
        y += letter.charAt(i).toUpperCase()
    }

}
console.log(y)

const num1: number = 27
let num2: number = 42

if (num1 > num2) {
    console.log(num1)
} else {
    console.log(num2)
}

let angka1: number = 42
let angka2: number = 27
let angka3: number = 18

if (angka1 > angka2 && angka1 > angka3) {
    console.log(angka3, angka2, angka1)
} else if (angka2 > angka1 && angka2 > angka3) {
    console.log(angka2, angka3, angka1)
} else if (angka3 > angka1 && angka3 > angka1)
    console.log(angka3, angka2, angka1)

let kata: null = null

if (typeof kata == "string") {
    console.log(1)
} else if (typeof kata == "number") {
    console.log(2)
} else {
    console.log(3)
}

let kata1: string = 'An apple a day keeps the doctor away'
let kata2: string = ''

for (let i = 0; i < kata1.length; i++) {
    if (kata1.charAt(i) == 'a' || kata1.charAt(i) == 'A') {
        kata2 += "*"

    } else {
        kata2 += kata1.charAt(i)
    }
}
    console.log(kata2)