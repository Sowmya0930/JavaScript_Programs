//check git fetch and merge
// ---map() -->accepts the call back function where operation will be performed on each
//array element and returns the array

// ---filter()  -> performs operation oneach array element ans returns the elemen which
 //   satisfy the condition
// ---reduce()


// let arr=[1,2,3,4,5]
// let marr=arr.map((x)=>{
//     if(x%2==0){
//         return x=x*2
//     }
//     else return x=x+1
// })
// console.log(marr);


// let arr=[1,2,3,4,5]
// let farr=arr.filter((x)=>{
//    return x%2==0
// })
// console.log(farr);

// let arr=[1,2,3,4,5]
// let rarr=arr.reduce((sum,element)=>{
//     return sum=sum+element
// })
// console.log(rarr);


// let arr=[1,2,3,4,5]
// let marr=arr.map((x)=> x=x+1 )
// console.log(marr);
// let farr=marr.filter((x)=>{
//     return x%2==0;
// })
// console.log(farr);
// let rarr=farr.reduce((sum,x)=>{
//     return sum=sum+x
// })
// console.log(rarr);

// let ans=arr.map((x)=>x+1).filter((x)=>x%2==0).reduce((sum,x)=>sum=sum+x)
// console.log(ans);

//==========callback================
let arr=[1,2,3,4,5,6];

function myFunction(myArr,callBack){
    const myNewNumbers=[];
    for(let x of myArr){
        if (callBack(x)==0){
            myNewNumbers.push(x);
        }
    }
    return myNewNumbers;
}

function calc(a){
    return a%2
}

const newArray = myFunction(arr,calc)
console.log(newArray);
