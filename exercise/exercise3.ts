function triangle(nums:number) {
    const res: any[] = []
    for (let index = 0; index < nums; index++) {
        const arr = []
        for(let j = 0; j <= index; j++){
if(j==0 || j == index){
    arr.push(1)
} else{
    arr.push(res[index - 1][j-1] + res[index-1][j])
}
        }
        res.push(arr)
    }
    return res
}

console.log(triangle(5))