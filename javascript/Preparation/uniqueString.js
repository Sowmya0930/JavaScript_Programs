function removeLowerCaseUppercasePairs(str){
    let result='';
    for(i=0;i<str.length;i++){
        if(str[i]!=str[i].toLowerCase() || str[i]!=str[i].toUpperCase()) {
            if(str[i].toLowerCase()==str[i+1] || str[i].toUpperCase()==str[i+1]){
                i++
            }else {
                result+=str[i]
            }
        }else {
            result+=str[i]
        }

    }
    return result

}
const inputString='bAaaaBbCcddg71tTnn'
console.log(removeLowerCaseUppercasePairs(inputString));