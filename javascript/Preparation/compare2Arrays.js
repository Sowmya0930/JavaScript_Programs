const arr1=[2,6,4,8,9]
const arr2=[8,6,2,4,1]

const myFunction=(arr1, arr2)=>{
    isSameArray=true
    if(arr1.length!=arr2.length){
        isSameArray=false
               
    }
    else {
        for(let i=0; i<arr1.length; i++){
            if(arr2.indexOf(arr1[i])<0){
                isSameArray=false
                break
            }
        }
     }
     return isSameArray
}
if(myFunction(arr1, arr2)){
    console.log("Smae array");
    }
    else {
        console.log("Not same array");
        
    }
