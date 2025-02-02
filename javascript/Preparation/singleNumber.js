const nums = [4, 4, 1, 2, 1, 2, 5];

const myFunction = (arr) => {
  let myObj = {};
  for (let n of arr) {
    myObj[n] = myObj[n] ? myObj[n] + 1 : 1;
  }
  for (let i in myObj) {
    if (myObj[i] == 1) return i;
  }
};
console.log(myFunction(nums));
