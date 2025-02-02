const str="I am sowmya ee"

const myFunction=(str)=>{
    const vowels=['a','e','i','o','u']
    var count=0
    for(let char of str.toLowerCase()){
        if(vowels.includes(char)){
            count++
        }
    }
    return count
}
console.log(myFunction(str));
