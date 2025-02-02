let arr=[1,2,4,9,3,5,6,10,8]

// let evenNumbers = myFucntion(arr,(x)=>x%2 == 0)

// function myFucntion(numbers,callback){
//     let changedArry=[]
//     for (const x of numbers){
//         if(callback(x)){
//             changedArry.push(x)
//         }
//     }
//     return changedArry;
// }
//====another method
// let evenNumbers = myFucntion(arr,callback)
// function callback(y){
//     return y%2==0;

// }

// function myFucntion(numbers,callback){
//     let changedArry=[]
//     for (const x of numbers){
//         if(callback(x)){
//             changedArry.push(x)
//         }
//     }
//     return changedArry;

// }

// console.log(evenNumbers);

//===========================
//Async method
// setTimeout(greet,1000)
// function greet(){
//     console.log("Hello");
// }
// setInterval(greet,1000);
// function greet(){
//     console.log("Hello");
// }

//=========================
Promise
let myPromise = new Promise(function(value,error){
    value("Success");
    error("Fail")

})

myPromise.then

