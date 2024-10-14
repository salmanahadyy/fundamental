function myFunc(str:string) {
    const alpha: string[] = " abcdefghijklmnopqrstuvwxz".split("")
    
    return str.split("").map(item =>alpha.indexOf(item.toLowerCase())).reduce((a,b) => a + b)

}

console.log(myFunc("Bandung"))
