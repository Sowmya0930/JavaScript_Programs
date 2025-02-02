const arr1=[1,2,3,4,5]
const arr2=[4,5,6,7]

const newArray=[...arr1,...arr2]
const unionArray=[...new Set(newArray)]
console.log(unionArray);
