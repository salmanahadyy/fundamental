function alphabetPlus(kata:string): number {
    let result = 0
    const alphabet = " ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    for (let index = 0; index < kata.length; index++) {
        const charIndex = alphabet.indexOf(kata[index])
        result = result *26 + charIndex
        
    }
    return result
}

console.log(alphabetPlus("AB"))