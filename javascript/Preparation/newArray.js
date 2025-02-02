
// function newArray(arr){
//       for(let i in arr){
//         if (arr[i]==0){
//            arr.splice(i,1);
//             arr.push(0)          
//         }
//     }
//     return arr
//  }
//  arr=[2, 0, 7, 0, 5, 0, 3, 9 ]
//  let output=newArray(arr);
//  console.log(output);

 function moveZerosToEnd(arr) {
    let nonZeroIndex = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
            arr[nonZeroIndex++] = arr[i];
        }
    }
    while (nonZeroIndex < arr.length) {
        arr[nonZeroIndex++] = 0;
    }
    return arr;
  }
  let array = [0, 1, 0, 3, 12];
  console.log(moveZerosToEnd(array)); 