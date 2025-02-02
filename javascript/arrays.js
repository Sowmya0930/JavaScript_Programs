

// let arr = [5, 4, 3, 3, 2, 1,4, 100]
//Adding elements to Array
//push() -> Add the element to the end of the array
// Push also reutrns the length of the arary

// console.log(arr.push('Name'))
// console.log(arr)

//unshift() -> Add the element to the beginning of the array
//Unshift also returns the lenght of the array

// console.log(arr.unshift('Name'))
// console.log(arr)

//============================================
//Removing elements
// //Pop(() -> It removes the last element and also returns the removed element

// console.log(arr.pop())
// console.log(arr)

// //shift() ->It removes the first element and also returns the removed element
// console.log(arr.shift())
// console.log(arr)

//indexOf() -> returns the index of the array element
// console.log(arr.length)
// console.log(arr.indexOf(100))

//includes() -> returns the true or false
// console.log(arr.includes(100))
// console.log(arr.includes(200))

// console.log(arr.toString())  //->Retuns the elements separated by camma
// console.log(arr.join('!'))   //-?Returns the elements separated by separator provided
// console.log(arr.reverse())  //->Returns the revered string
// console.log(arr)

//slice ->Slice retuns the part of the array elements
// console.log(arr.slice(2, 6))  // start from index 2 to index 6-1

//splice
// console.log(arr)
// console.log(arr.splice(1, 2,100, 200, 300))
// console.log(arr)
//console.log(arr.splice(2,4))
//console.log(arr.splice(3))

// for (var i in arr){
//     console.log(i)
// }

// for (var i of arr){
//     console.log(i)
// }


// let arr1 = [4, 5, 6]
// arr1.splice(0,2, 40, 50)
// console.log(arr1)
// arr1.unshift(100)
// console.log(arr1)
// console.log(arr1.length)

//Sort()

// let arr1 = [5, 90, 200, 1000, 1050]
// console.log(arr1.sort())
// console.log(arr1.sort((a,b)=>a-b));

//concat ->Givea new array
// let arr1 = [1, 2,3]
// let arr2 = [4,5,6]
// console.log(arr1.concat(arr2));


// Map()
// let arr = [1,2,3,4,5,6]
// let myFunction=(value,index,array)=>{
//     return value*=2}

// let mappedArray = arr.map(myFunction)
// console.log(mappedArray);


// filter()
// let arr = [1,2,3,4,5,6]
// let myFunction = function(value, index, array){
//     return value%2==0;
// }

// let filetredArray=arr.filter(myFunction)
// console.log(filetredArray);
// reduce()

// let arr = [1,2,3,4,5,6]
// let sumValue=arr.reduce((sum,value)=>{
//     return  sum=sum+value;
// })
// console.log(sumValue);

//every()
// let arr = [11,12,13,14,15,6]

// let check=arr.every((value,index,array)=>{
//     return value>10;
// })
// console.log(check);

let arr = [11,12,13,14,15,6]


//forEach method

// let arr = [1,2,3,4,5,6]
// function myFunction(value,index,array){
// return array[index]+=1;
// }

// console.log(arr.forEach(myFunction));


