// comparessed string   aaabbbcccc=a3b3c4
function compressString(input){
    let compressedstring='';
    let currentChar='';
    let charCount='';
    for(let char of input){
        if(char!==currentChar){
            if(charCount>0){
                compressString+=currentChar+charCount;
            }
            currentChar=char;
            charCount=1;
        }else{
            charCount++
        }
    }
    if(charCount>0){
        compressString+=currentChar+charCount;
    }
    return compressString

}
let input='aaabbbssssaabbc'
console.log(compressString(input));