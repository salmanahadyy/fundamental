
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

// 2
const arr1 = {a:1,b:2}
const arr2 = {a:1,b:2}

const intersection

