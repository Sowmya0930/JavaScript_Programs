const arr=[1,3,4,6]
const target=5

const myFunction=(arr, tar)=>{
    let left=0
    let right=arr.length-1
    let mid=0
    while(left<=right){
        mid=Math.floor((left+right)/2)
        if(arr[mid]==target) return mid
        else if(arr[mid]<target) left=mid+1
        else right=mid-1
    }
    return left
}
console.log(myFunction(arr,target))