// input: Javascript is my favourite subject
//output: is my subject favourite Javascript

function sortWordsInString(input) {
  let output = "";
  let splittedArray = [];
  let sortedArray = [];
  let sortByString=''
  let sortedString = "";
  splittedArray = input.split(" ");
  // return splittedArray
  sortByString=splittedArray.sort();
//   return sortByString
  sortedArray = sortByString.sort((a, b) => a.length - b.length);
//   return sortedArray
  sortedString = sortedArray.join(" ");
  return sortedString;
}
const input = "Javascript is my favourite subject";
console.log(sortWordsInString(input));
