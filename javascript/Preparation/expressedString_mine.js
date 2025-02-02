function newString(input) {
  let newStr = "";
  let count = 0;
  let currentChar = "";
  // console.log(input);
  for (let i = 0; i < input.length; i++) {
    if (isNaN(parseInt(input[i]))) {
      currentChar = input[i];
      count = input[i + 1];
    } else {
      while (count > 0) {
        newStr += currentChar; 
        count--; 
      }
      currentChar = "";
      count = 0;
    }
  }
  return newStr;
}
input = "a2b2a2";
console.log(newString(input));
