function profit(arr: number[]){
    let profit: number = 0
    let nilaiProfit : number = 0
    let hariProfit : number = 0

    for (let index = 0; index < arr.length; index++) {
        let j : number = index + 1
        while (j<arr.length){
            if (arr[j] - arr[index] <= 0){
                j++
            } else{
                if(profit <= arr[j] - arr[index]){
                    profit = arr[j] - arr[index]
                    nilaiProfit = arr[j]
                    hariProfit = j + 1
                }
                j++
            }
        }
        
    }
    return hariProfit
}

let arr: number[] = [7,1,5,3,6,4]
console.log(profit(arr))

// cara kang ilham

function Profit(arr:number[]) {
    // const min = Math.min(...arr)
    // const idxMin = arr.indexOf(min)
    // const newArr = arr.splice(idxMin)
    // const max = Math.max(...newArr)

    // return max - min

    const res = []
    for (let index = arr.length -1; index > 0; index--) {
        for (let j = index; j >= 0; j--) {
            res.push(arr[index]- arr[j])
            
        }
        
    }
    return res
}

console.log(Profit([2,9,7,1,5,3,6,4]))