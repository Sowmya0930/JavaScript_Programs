const arr=[9,1,2,1,4,5,4,2,5,9]

// const duplicates=arr.filter((ele,index, array)=>array.indexOf(ele)!==index)
// console.log(duplicates);
const duplicates=[]

for(let i=0; i<arr.length; i++){
    for(let j=i+1; j<arr.length; j++){
        if(arr[i]===arr[j]){
            duplicates.push(arr[i])

        }
    }
    }

    console.log(duplicates);
    
