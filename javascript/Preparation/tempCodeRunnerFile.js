const myFunction=(str)=>{
    const myObj={}
    for(let word of str){
    const key= getKey(word)
    if(myObj[key]){
        myObj[key].push(word)       
    } else{
        myObj[key]=[word]
    }
    }
    return Object.values(myObj)