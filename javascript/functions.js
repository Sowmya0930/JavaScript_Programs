//Functions  ->different ways to declare functions

//1. function
//2. Expression
//3.anonymous
//4.IIFE
//5.Arrow
//6.callback
//7.Higher order

//1. function
// function fun1{
// }
// fun1()

//2. Expression
// let fun1 = function(){
// }
// fun1()

//3.arrow
// const fun1=()=>{
// }
// fun1()

//4.annonymous


//5.IIFE
// (function myFunction(){
// })();

//6.callback and higher order function
//fun1 is heigher order function
// function callBack(){

// }
// function fun1(callBack){
// inside fun1 calling another function as callback
// }

//Heigher Order
//setTimeOut() ->Check the order of output to see
//Asyncronous method

// console.log("Hello1");
// setTimeout(fun1,2000)
// function fun1(){
//     console.log("Hello2");
// }
// console.log("Hello3");
///==================================
//function using constrcutor
function myFunction(fName,lName){
        this.fName=fName,
        this.lName=lName   
}
let sum1=new myFunction("Joe","Peter");
console.log(sum1.fName);
// let sum2=new myFunction(5,3);
// let sum3=new myFunction(2,8);


//=============================
//Functions call() :
// const person={
//     myFunction: function(city){
//         return `My name is ${this.name} and age is ${this.age} and city is ${city} `
//     }
// }
// const person1={
//     name:"Peter",
//     age:"20"
// }
// const person2={
//     name:"Nick",
//     age:"25"
// }
// console.log(person.myFunction.call(person1,"Tumkur"));