function romanToInteger(str:string) :number {
    const Roman: {[key: string]: number} = {
        "I" : 1,
        "V" : 5,
        "X" : 10,
        "L" : 50,
        "C" : 100,
        "D" : 500,
       "M" : 1000
    }
    
    let result = 0
    for (let index = 0; index < str.length; index++) {
        const currentInt = Roman[str.charAt(index)]
        if (currentInt < Roman[str.charAt(index + 1)]) {
            result -= currentInt
            } else{
                result += currentInt
            }

        
    }
    return result
}
console.log(romanToInteger("LVIII"))