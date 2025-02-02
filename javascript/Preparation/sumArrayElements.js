function sumArrayElements(sum,arr){

    for(let i=0; i<arr.length; i++){  
        for (let j=i+1; j<arr.length;j++){   
            if (arr[i]+arr[j]==sum)
                return `${arr[i]} , ${arr[j]} makes the sum ${sum}`
        }
    }
}
const sum=13;
const arr=[2,4,6,8,20,3,10]
console.log(sumArrayElements(sum,arr));