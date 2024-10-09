
// 1
function equal1(a:object, b:object) {
        if (JSON.stringify(a) == JSON.stringify(b)) {
            return true
        } else{
            return false
        }
}
console.log(equal1({a:2},{b:1}))
console.log(equal1({a:"Hello"},{b:1}))
console.log(equal1({a:1},{a:1}))

// 5
const n: number = 5

function factorial (n:number){
    let result: number = 1
    for (let i = n; i > 0; i--) {
    result *= i
}
return result
}
console.log(factorial(n))

// cara kang ilham no 5
function Factorial(n2:number): number {
    return n2 == 0 ? 1 : n2 * Factorial(n2-1)
}
console.log(Factorial(5))


// 2
function intersection(obj1:Record<string,any>, obj2:Record<string,any>) {
    const res: Record<string,any> = {}
    for(let key in obj2){
        if(obj1.hasOwnProperty(key) && obj1[key] == obj2[key] ){
            res[key] = obj1[key]
        }
    }
    return res
}

console.log(intersection({a:1, b:2},{a:1,c:3}))

// 4
function namaFunction (Arr: any){
const res: any = {}

    for (let key in Arr[0]) {
    res[Arr[0][key]] = key

}
return [res]
}


console.log(namaFunction([{name: "david", age:20}]))


// 3
interface Merge{
    name:string
    email:string
}

const arr1: Merge[] = [{ name: "Student 1", email : "student1@mail.com" },
    { name: "Student 2", email : "student2@mail.com" }]
    
    const arr2: Merge[]= [{ name: "Student 1", email : "student1@mail.com" },
        { name: "Student 3", email : "student3@mail.com" }]
        
        function mergearr(arr1:Merge[], arr2:Merge[]){
            const resarr: Merge[] = arr1
            for (let item of arr2) {
                const idx = resarr.findIndex((val)=>val.name == item.name && val.email == item.email)
                if ( idx == -1) resarr.push(item)
            }
            return resarr
        }

        console.log(mergearr(arr1,arr2))


        // challenge
        function sensor(str:string) {
            const wordSensor = ["anjing","babi","monyet"]
            const res: string[] = []

            str.split(' ').forEach((item)=>{
                if (wordSensor.includes(item)) {
                    const first = item.charAt(0)
                    const last = item.charAt(item.length-1)
                    const middle = "*".repeat(item.length -2)
                    res.push(first + middle + last)
                } else {
                    res.push(item)
                }
            })


            return res.join(' ')
        }

        console.log(sensor("seekor anjing dan babi bermain di taman"))
        console.log(sensor("monyet makan pisang"))