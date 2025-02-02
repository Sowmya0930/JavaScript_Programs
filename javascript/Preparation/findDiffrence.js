let nums1 = [1,2,2,3], nums2 = [2,4,6]

const myFunction=(num1, num2)=>{
    let set1=new Set(num1)
     let set2=new Set(num2)
    for( let n of set1){
        if(set2.has(n)){
            set1.delete(n)
            set2.delete(n)
        }
    }
    return [[...set1],[...set2]]
}
console.log(myFunction(nums1, nums2))