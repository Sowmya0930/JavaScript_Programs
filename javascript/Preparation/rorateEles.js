const nums = [1,2,3,4,5]
const k=3
for(let i=0; i<k; i++){
nums.unshift(nums.pop())
}
console.log(nums)

// const nums = [1,2,3,4,5]
// const k=3
// let i=0

// while(i<k){
//    nums.unshift(nums.pop())
//    i++
// }

console.log(nums)