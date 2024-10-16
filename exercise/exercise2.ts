function singleNumber(nums: number[]): number {
    if(nums.length === 1) return nums[0];
    
    for(let i = 0; i < nums.length; i++){
        if(nums.indexOf(nums[i]) === nums.lastIndexOf(nums[i])){
            return nums[i]
        }
    }
    return 0;
 };

 const singleNumber1 = [2,2,1]
 const singleNumber2 = [4,1,2,1,2]
 
 console.log(singleNumber(singleNumber1))
 console.log(singleNumber(singleNumber2))
 console.log(singleNumber([1]))

 function anagram(s:string) {
    return s.split("").sort().join()
 }
console.log(anagram("anagram"))