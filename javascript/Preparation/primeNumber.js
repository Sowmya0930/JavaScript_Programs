const num=22;

const myFunction=(num)=>{
   
    if(num==1){
        print(`${num} is neither prime nor composite`)
    } else if(num<1){
        print(`${num} cannot check for prime`)
    } else {
        for(let i=2; i<=num/2;i++ ){
            if(num%i==0){
                let result="Number is not prime"
                break;
            } else {
                result="Number is prime"
            }
        }
        return result
    }
}

console.log(myFunction(num));
