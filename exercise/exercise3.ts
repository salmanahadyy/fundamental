function anagram(str:string, kata:string) {
    return str.split("").sort().join() === kata.split("").sort().join()
}

console.log(anagram("anagram","nagaram"))
console.log(anagram("kasur","rusak"))
console.log(anagram("garam","ragam"))
console.log(anagram("rat","car"))
