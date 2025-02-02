// separate numbers and charecters from string
//Ex: 'dff5a87sd6' => '5876,addffs'

function separationString(input) {
  let numbers = "";
  let charecters = "";
  for (let char of input) {
    if (!isNaN(parseInt(char))) {
      numbers += char;
    } else {
      charecters += char;
    }
  }

  charecters = charecters.split("").sort().join("");

  return `(${numbers},${charecters})`;
}

const randomString = "dff5a87sd6";
const formatedString = separationString(randomString);
console.log(`${randomString}`);
console.log(`Formated string : ${formatedString}`);
