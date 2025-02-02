function secNonRepeatingChar(str){
    const charCount=new Map();
    const nonRepeatingChar=[];
    for(const char of str){
        charCount.set(char,(charCount.get(char) || 0) + 1); // (p,1) (r,1)(o,1)(g,1)(r,2)

    }
    for(const char of str){
        if(charCount.get(char)===1){
            nonRepeatingChar.push(char);
        }
    }
    return nonRepeatingChar.length >= 2? nonRepeatingChar[1]: null
}

const str='programming';
console.log(secNonRepeatingChar(str));
