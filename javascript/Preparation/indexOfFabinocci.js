const target=5

const myFunction=(n)=>{
    let first=0
    let second=1
    let sum=0
    let arr=[]
    while(sum<=target){
        arr.push(sum)
        first=second
        second=sum
        sum=first+second
    }
    if(arr.includes(n)){
        return `true,${arr.indexOf(n)}`
    }
    else{
        return (false)
    }
}
console.log(myFunction(target))