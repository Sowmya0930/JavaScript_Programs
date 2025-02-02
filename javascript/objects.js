//function inside the object is called method. to access the properties inside the object
// "this" key word

const myObj = {
    name: "Sowmya",
    age: 25,
    isStudent: true,
    courses: ["UI", "QA", "ML"], //array
    objInsideMyObj: {
      //Object
      instructor: "Ameer",
      isAttending: true,
    },
    myFunct:()=>{
      //also can mention like myFunction: function(){}
      return `My name is ${this.name} and age is ${this.age} attending ${this.courses[0]} batch
          and the isntructor is ${this.objInsideMyObj["instructor"]}`;
  
      //to access property of the object you can use dot operator or [' sing;e quotes if it string']
    },
  };
  // for (let variable in myObj){      //for in loop to access object properties
  //   console.log(myObj[variable]);
  // }

  console.log(myObj.myFunct());
  
  // myObj.email = 'sowmyahr.1985@gmail.com'    //adding propert to object
  // console.log(myObj);
  
  // delete myObj.email;                // deleting object properties
  // console.log(myObj);
  
  
  //assigning the object so chnges to orginal does not affect new one
  // const obj2 = Object.assign({},myObj)       
  // myObj.email = 'sowmyahr.1985@gmail.com';
  // console.log(myObj);
  // console.log(obj2);
  
  //refering the object: changes will afect in both objects
  // const obj3=myObj;
  // myObj.email = 'sowmyahr.1985@gmail.com';
  // console.log(myObj);
  // console.log(obj3);
  
  //to get the keys  and values of the obj
  // console.log(Object.keys(myObj));
  // console.log(Object.values(myObj));
  // console.log(Object.entries(myObj));       //returns each property as array so 2d array
  
  
  //Object seal->Can update the existing properties but cannot add new properties
  //Object.freeze ->Cannot update the existing properties and cannot add new properties
  
  
  // Object.seal(myObj)       //not allwoing to add new property
  // // myObj.email = 'sowmyahr.1985@gmail.com';
  // myObj.age=35;
  // console.log(myObj);
  
  // Object.freeze(myObj)       //not allowing both condition
  // myObj.email = 'sowmyahr.1985@gmail.com';
  // // myObj.age=35;
  // console.log(myObj);
  
  //===============================================
  //JSON methods  stringfy and parse
  // let x=JSON.stringify({name:'Sowmya',age:20});
  // console.log(x);
  
  // let y=JSON.parse('{"name":"Sowmya","age":20}');
  // console.log(y);
  //=================================================
  
  
  //Date Object
  
  // let todaysDate = new Date();
  // console.log(todaysDate);
  // console.log(todaysDate.getFullYear());
  // console.log(todaysDate.getMonth());
  // console.log(todaysDate.getDate());
  // console.log(todaysDate.getDay());
  // console.log(todaysDate.getHours());
  // console.log(todaysDate.getMinutes());
  // console.log(todaysDate.getSeconds());