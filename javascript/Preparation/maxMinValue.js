const arr=[1000,10,30,250,4,5000]

// const maxFunction=(arr)=>{
//     return arr.reduce((pre,cur)=>
//      pre>cur?pre:cur
// )
// }
// console.log(maxFunction(arr));

//=========================================
// const maxValue=arr.reduce((pre,cur)=>pre<cur?pre:cur)
// console.log(maxValue);

//=========================
const minValue=arr.reduce((pre,cur)=>pre<cur?pre:cur)
console.log(minValue);



