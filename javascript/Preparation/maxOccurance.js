const arr = [1, 2, 6, 2, 3, 1, 2, 4, 5, 6, 6, 6, 7];
const myObj = {};
let ele = 0;
let max = 0;

for (let i of arr) {
  myObj[i] = myObj[i] ? myObj[i] + 1 : 1;
}
console.log(myObj);
for (let i in myObj) {
  if (max < myObj[i]) {
    max = myObj[i];
    ele = i;
  }
}
console.log(ele, max);
