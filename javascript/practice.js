
function secondLargest(str){
    let currentNum =""  ; 
    const numbersArray=[]; 
    const resultArray=[]
    
    for(let char in str){
        if(!isNaN(parseInt(char))){
            currentNum+=char;
        }
        else if (currentNum!=""){
            numbersArray.push(parseInt(currentNum))
        }
    } 
    
    numbersArray.forEach((ele)=>{
        if(!resultArray.includes(ele)){
            resultArray.push(ele)
        }
    })
    return resultArray.length >1 ? resultArray[1]:"Array has only 1 element"

}
const inputString = "the numbers are  42,  15,81, 74, and 93";

const result=secondLargest(inputString)
console.log(result);
