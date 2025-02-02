const num=-5;

const myFunction=(num)=>{
    let fact=1
    if(num<0){
        console.log(`factorial of ${num} is not possible`);
        
    }
    else {
        for(let i=num; i>=1; i--){
            fact=fact*i;
        }
        console.log(`factorial of ${num} is ${fact}`); 
    }
      

}
myFunction(num)