const add = (function () {
    let counter = 0;
    return function () {counter += 1; return counter}
  })();

   console.log(add());//-1 

   console.log(add()); //
   
  console.log(add());
 