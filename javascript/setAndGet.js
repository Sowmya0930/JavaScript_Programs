//set 
// let number = new Set([1,2,3])

// number.add(4)
// console.log(number);
//  console.log(number.has(3));
// number.delete(1);
// console.log(number);

//=========================
//Map->Stores in key alue frame
let numbers = new Map([
    ["John",20],
    ["Nick",25],
    ["peter",43]
])

// console.log(numbers);
// numbers.set("John",30)     //set can be used to change and add new elements
// console.log(numbers);
// console.log(numbers.get("John"));

// console.log(numbers.size);
numbers.delete("John");
// console.log(numbers.size);

console.log(numbers.has("John"));


