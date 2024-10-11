/*
input:"purwadhika"
output: 4
*/

function Vowel(str:string) {
    let vokal = str.split('').filter(item => 'aiueo'.includes(item))

    let includes = vokal.length
    console.log(includes)
}

Vowel("purwadhika")
Vowel("bandung")

// cara kang ilham

function countVowel(str:string) {
    const vowel = ["a","i","u","e","o"]
    let res: number = 0

    for (let index = 0; index < str.length; index++) {
        if(vowel.includes(str.charAt(index))){
            res++
        }
        
    }
    return res
}

console.log(countVowel("jakarta"))