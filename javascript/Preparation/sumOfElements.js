const arr=[2,3,4,5,6]

const myFunction=(arr)=>{
    return arr.reduce((pre,cur)=>pre+=cur)
}

console.log(myFunction(arr));
