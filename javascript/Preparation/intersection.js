let arr1=[1,2,3,4,5,6]
let arr2=[5,6,7,8,1]

let commonElements=arr1.filter((ele)=>arr2.includes(ele))
console.log(commonElements);
