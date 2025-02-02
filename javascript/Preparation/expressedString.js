// a3b3c3 ->aaabbbccc
function expandString(input) {
    let output = '';
    let count = '';
    let lastChar = '';  

    for (let char of input) {
        if (char >= '0' && char <= '9') {
            count += char;
        } else {
            if (lastChar !== '') {
                if (count !== '') {
    
                    output += lastChar.repeat(Number(count));
                    count = '';
                } else {
               
                    output += lastChar;
                }
            }
            lastChar = char;
        }
    }

  
    if (lastChar !== '') {
        if (count !== '') {
            output += lastChar.repeat(Number(count));
        } else {
            output += lastChar;
        }
    }

    return output;
}

let input = "a2b3c1";
console.log(expandString(input));