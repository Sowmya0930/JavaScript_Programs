const myPromise = new Promise((res,rej)=>{
    // res("Resolved");
    rej("Error")
})
// myPromise.then((str)=>{
//     console.log(str);
// })

myPromise.catch((str)=>{
    console.log(str);
})