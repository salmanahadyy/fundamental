

function equal1(a:object, b:object) {
        if (a == b) {
            return true
        } else{
            return false
        }
}
console.log(equal1({a:2},{b:1}))
console.log(equal1({a:"Hello"},{b:1}))
console.log(equal1({a:1},{b:1}))