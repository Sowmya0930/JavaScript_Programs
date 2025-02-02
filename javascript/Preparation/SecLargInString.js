//    to find Second latgest number in a string
function secondLargestNumber(str) {
  let currentNum = "";
  const numbers = [];
  const result = [];
  for (let char of str) {
    if (!isNaN(parseInt(char))) {
      currentNum += char; // + 4
    } else if (currentNum !== "") {
      numbers.push(parseInt(currentNum));
      currentNum = "";
    }
    if (currentNum>0){
      numbers.push(parseInt(currentNum));

    }
  }
  numbers.forEach((num) => {
    if (!result.includes(num)) {
      result.push(num);
    }
  });
  result.sort((a, b) => b - a);
  return result.length > 1 ? result[1] : "no second largest number found";
}
const inputString = "the numbers are  4,  1,9, 7, and 8";
const result = secondLargestNumber(inputString);
console.log("second largest number " + result);
