const rectangleLength: number = 5
const rectangleWidth: number = 3
const rectangleArea: number = rectangleLength * rectangleWidth
console.log(rectangleArea)


const rectanglePerimeter: number = 2* rectangleLength +  2* rectangleWidth
console.log(rectanglePerimeter)

const circleRadius: number = 5
const circleDiameter: number = 2 * circleRadius
const circleCircumference: number = 2 * Math.PI * circleRadius
const circleArea: number = 3.14 * circleRadius**2
console.log(circleDiameter, circleCircumference, circleArea)

const triangleA: number = 80
const triangleB: number = 65
const triangle: number = 180
const triangleAngles: number = triangle - triangleA - triangleB
console.log(triangleAngles)

let days: number = 400 
let years: number = Math.floor(days / 365)
console.log(years)
days %= 365
let month: number = Math.floor(days/30)
days%= 30
let day: number = days
console.log(years,month,day)

const n: number= 366
const sisa: number= n % 365
const sisa2: number= n % 30

const tahun: number = (n - sisa) / 365
const bulan: number = (sisa - sisa2) / 30
const hari: number = (sisa2)
const result: string = `${tahun} year, ${bulan} month, ${hari} days`
console.log(result)




const date1: Date = new Date(2022-1-20)
const date2: Date = new Date(2022-1-22)

let difference: number = date1.getTime()-date2.getTime()
console.log(difference)


