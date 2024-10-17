function majority(nums:number[]):number {
    const sortedNums = nums.sort((a,b) => a-b)
    return sortedNums[Math.floor(nums.length / 2)]
}

console.log(majority([2,2,1,1,1,2,2]))