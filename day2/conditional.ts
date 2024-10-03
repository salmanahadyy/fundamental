let age: number = 21
if (age >= 17) {
    console.log("You can now create an ID card")
} else {
    console.log("You are not old enough to create an ID Card")
}

let grade: string = "A"
if (grade == "A") {
    console.log("excellent Result")
} else if (grade == "B") {
    console.log("Great result")
} else if (grade == "C") {
    console.log("Average result")
} else {
    console.log("Invalid grade")
}

const date: Date = new Date("2025-01-01")
const day: number = date.getDay()

switch (day) {
    case 0:
        console.log("Minggu")
        break;
    case 1:
        console.log("Senin")
        break;
    case 2:
        console.log("Selasa")
        break;
    case 3:
        console.log("Rabu")
        break;
    case 4:
            console.log("Kamis")
            break;
     case 5:
            console.log("Jumat")
            break;
    case 6:
            console.log("Sabtu")
            break;
    default:
        console.log("Invalid day")
}

const x: number = 6
const y: number = 3

console.log(x < 10 && y > 1)
console.log(x < 5 || y > 5)

const str: string = "Typescript"

// ternary
console.log(str == "Typescript" ? "Typescript" : "Not Typecript")


const value: string = ""

const result: string = value && "purwadhika"
const result2: string = value || "purwadhika"
console.log(result)
console.log(result2)

