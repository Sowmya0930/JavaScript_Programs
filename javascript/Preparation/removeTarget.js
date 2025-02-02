const nums = [3,2,2,3,1], val = 3

const myFunction =(nums, val)=>{
    for(let n of nums){
        if(n===val){
            let index=nums.indexOf(n)
            nums.splice(index,1)
        }
    }
    return nums
}
console.log(myFunction(nums, val))