//given a stairs of n steps, we need to count the number of distinct ways go to top
//so can either climb 1 step or 2 step at a time
//n=1 (1) 
//n=2 (1,1) (2)
//n=3 (1,1,1) (2,1) (1,2)
//n=4 (1,1,1,1) (2,1,1)(1,2,1)(1,1,2)(2,2)
// n ways = n-1  ways + n-2 ways

function climbingStairs(numberOfStairs){
    const numberOfWays =[]

}
let numberOfStairs = 4;
console.log(climbingStairs(numberOfStairs));