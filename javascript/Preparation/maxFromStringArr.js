let arr = ["23-43-65", "98-22-100", "12-23-139"];

const myFunction = (arr) => {
  let maxArr = [];
  for (let n of arr) {
    let strArr = n.split("-");
    let max = Math.max(...strArr);
    maxArr.push(max);
  }
  return maxArr;
};
console.log(myFunction(arr));
