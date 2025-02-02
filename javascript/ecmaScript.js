// let const and var
//Hoisting  ->Takes the variable and function decalration at the top of the page
//              where as let and const cannot be hoisted

// console.log(x)    //->Returns Undefined, becaouse it is already declaed
// var x= 10;

// x=10;
// console.log(x)    //->Returns value
// var x;


// doSomething()  //->returns undefined
// function doSomething() {
//     return "Inside the functon"
// }
// doSomething() //-> returns

//=========================================
//templat litterals ->optimized version of string
//                      use backticks ``
// and to add variables inside `` use ${}



//========================================

// Arrow function functionName=()=>{}  ->cannot use 'this' keyword and if it single return then no need to use {}

// function doSomething(){
//     return "Something here"
// }
// console.log(doSomething());

//====================================
//Arrow function representaion below
// const doSomething=()=>{return "something here"}
// console.log(doSomething());
//if there is single line inside to return then no need to write return
// const doSomething=()=> "something here";
// console.log(doSomething());

//==================================
//rest parameters and spread arguments

//rest ... if we dont know how many argumnets are passing then we can use
//          ...args args store rest of the paramaters as  arry
// below example 10 will be in a and rest will be in args as arrat
// let myFunction=(a,...params)=>{
//     console.log(a);
//     console.log(params);
// };
// myFunction(1,2,3,4,5)    //calling function with many arguments

//=====================================
//spread arguments...

// const myFunction=(a,b,c)=>{
//     console.log(a,b,c);
// }
// let arr1=[1,2,3];
// let arr2=[1,2,3,4,5]

// myFunction(arr1)      //assigns arr1 to a
// myFunction(...arr1)      //assigns each value in arr1 to 
// myFunction(...arr2)        //ignores the remaining arguments

//============================
//destructuing .. spread arguments also called desctruring

// let arr=[1,2,3,4,5];
// let [a,b,c,d,e]=arr;    //array elements are spreads to variable
// console.log(a,b,c,d,e)

//======================================
//map()   ->call back function will be invoked for each element and returns an array

// let arr=[1,2,3,4,5]

// let myFucnt=(ele,index,array)=> ele*=ele;

// let mappedArray=arr.map(myFucnt)
// console.log(mappedArray)

//performing action on element calback parametr
// let mappedArray=arr.map(function(ele,index,array){
//     return ele*=ele;
// })

//performing action using index and array
// let mappedArray=arr.map(myFunct=(ele,index,array)=> array[index]=array[index]+1)
// console.log(mappedArray);

// let mappedArray=arr.map((x)=>{
//     return x=x+""
// })
// console.log(mappedArray);
//======================

//filter() call back function will be invoked for each element and returns an array
//          whi satisfies the condition

// let arr=[1,2,3,4,5,6]
// let myFucntion=(ele,index,array)=>ele%2==0;
// let filetredArray=arr.filter(myFucntion)
// console.log(filetredArray);

// let filetredArray=arr.filter((x)=>{
//     // return x%2==0;
//     return
// })
// console.log(filetredArray);



//=================================

//reduce()  -> returns the single value
// let arr=[1,2,3,4,5]

// let callBack =(sum,ele)=>{
//     return sum=sum+ele
// }

// let reduceArr=arr.reduce(callBack)
// console.log(reduceArr)
//              ==============================

// let myFunction=(sum,element)=>{
//    return sum=sum+element;
// }
// let reducedArray=arr.reduce(myFunction)
// console.log(reducedArray);
        //==============

// function myFunction(sum,element){
//     return sum=sum+element;
//  }
//  let reducedArray=arr.reduce(myFunction)
//  console.log(reducedArray);
 
let arr=[1,2,3,4,5]
let value=arr.map((x)=>x+=1).filter((x)=> x%2==0).reduce((sum,ele)=>sum+=ele);
console.log(value);

