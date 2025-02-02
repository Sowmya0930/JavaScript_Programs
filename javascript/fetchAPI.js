const { json } = require("stream/consumers");

fetch('https://reqrrerwes.in/api/inpafk?page=2')

// fetch('https://reqres.in/api/users?page=2')    //success link
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log(data);
})
.catch((err)=>{
    console.log(err);
})