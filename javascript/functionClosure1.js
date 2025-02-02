const parentFunction = () => {
    let a = 2;
    console.log(a);
    
    const childFunction = () => {
    console.log(a += 1);
    }
     return childFunction;
    }
      
    const result = parentFunction(); //Line 1

    // console.log(result); //Line 2

    result(); //Line 3  