
const arr1=[1,3,5,7]
const arr2=[2,4,6,8,9]

//using concat method
// const arr3=arr1.concat(arr2)
// const sortedArray=arr3.sort((a,b)=>a-b)

//using separate operator
// const result=[...arr1,...arr2]
// const sortedArray=result.sort((a,b)=>a-b)
// console.log(sortedArray);

const n=arr1.length+arr2.length
const arr3=[]
for(let i=0; i<n; i++){
    if(i<arr1.length){
    arr3.push(arr1[i])
    }
    else{
        arr3.push(arr2[i-arr1.length])
    }
}
console.log(arr3);

