let arr=[21,18,6,90,1]

const myFunction=(arr)=>{
    const firstLargeNumber=Math.max(...arr)
    const index=arr.indexOf(firstLargeNumber)
    arr.splice(index,1)
    const secondLargeNumber=Math.max(...arr)
    return secondLargeNumber    

}
console.log(myFunction(arr));


