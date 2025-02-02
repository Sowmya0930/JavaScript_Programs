// take 2 arrays and output array should include only common values between two arrays

let arr1 = [32, 3, 7, 67, 56, 8];
let arr2 = [7, 30, 32, 67, 56, 99];

function uniqueArr(arr1, arr2) {
    const intArray = arr1.filter((val) => arr2.includes(val));
    console.log(intArray);
}
 
uniqueArr(arr1, arr2)
