/*
input = "123456789"
output = "(123)-456-789"

input = "987654321"
output = "(987)-654-321"

*/

const phone:number = 123456789
const num: string = phone.toString()

let res: string = ""
let res2: string = ""
let res3: string = ""

for (let index = 0; index < num.length; index++) {
    if(index <= 2){
res += num[index]
    } else if ( index >= 2 && index < 6){
        res2 += num[index]
    } else if( index >=6){
        res3 += num[index]
    }
    
}

let result: string = (`(${res})` + `-${res2}-` + res3)
console.log(result)

// cara kang ilham

function myFunc(str:string) {
    let res = "(xxx)-xxx-xxx"
    for (let index = 0; index < str.length; index++) {
        res = res.replace("x", str.charAt(index))
        console.log(res)
    }
    return res
}

console.log(myFunc("987654321"))