const arr=[1,3,4,7,8,9,10]
const missValues=[]

const missingArr=(arr)=>{
    const minValue=Math.min(...arr)
    const maxValue=Math.max(...arr)
    for(let i=minValue; i<maxValue; i++){
        if(arr.indexOf(i)<0){
            missValues.push(i)
        }

    }
    return missValues  

}

console.log(missingArr(arr));
