//remove the duplicates from both array and store in single array

let arr1 = [32, 3, 7, 67, 234, 56, 8];
let arr2 = [7, 30, 30, 67, 56, 99];

function uniqueArr(arr1, arr2) {
  let concatArray = arr1.concat(arr2);
  const uniqueElements = new Set(concatArray);
  const finalArr = Array.from(uniqueElements);
  const resultArr = finalArr.sort((a, b) => a - b);
  return resultArr;
 }

let result = uniqueArr(arr1, arr2);
console.log(result);
