function climbStairs(n:number) : number {
    if(n === 1) return n
    if(n === 2) return n
    
    let a = 0
    let b = 1
    let c = 0
    let res = 0
    
    for (let index = 0; index < n-2; index++) {
        c= a+b
        a= b
        b= c
        res += c
     }
     return res + 2
}

console.log(climbStairs(15))
