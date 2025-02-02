// Creating Object with Object litteral
// const myObj ={
//     fname:"Sowmya",
//     lName:"Rajanna",
//     courses:['UI','ML','QA'],
//     instruction:{
//         instructor:"Nick",
//         course:'UI'
//     },
//     myFunction : function(){
//         return `My name is ${this.fname} and instructor for ${this.courses[0]} is ${this.instruction['instructor']}`

//     }
// }
// console.log(myObj.myFunction());      //accessing each property/method

// for (let variable in myObj){           //accessing using for loop
//     console.log(variable);
//     console.log(myObj[variable]);
// }

// console.log(Object.values(myObj));           //using Object.values

// let myString= JSON.stringify(myObj)             //using JOSN stringyfy but it sodes not stringfy functions
// console.log(myString);


//============================
//Creating object with New keyword

// const myObj = new Object();
// myObj.name="Sowmya";
// myObj.instruction ={instructor:"Nick",course:'UI'};
// myObj.myFunction= function(){
//     return `My name is ${this.name} and instructor is ${this.instruction['instructor']}`

// }

// console.log(myObj.myFunction());


//==================================================
//Creating objects using Constructor Functions and adding property or methods to it

// function myObj(fname,lname,age){
//     this.fName=fname;
//     this.lName=lname;
//     this.Age=age;
//     this.myFunc =function(){
//         return `this.instructor`

//     }

//     }

// const person1=new myObj("Sowmya","Rajanna",25);

// // to add properties or methods to constructor then use prototype
// myObj.prototype.instructor="Nick";

// console.log(person1.instructor);

//==============================

//Object Management
const person = {
    firstName: "John",
    lastName : "Doe",
    language : "EN"
  };
//Add a property
// Object.defineProperty(person,"age",{value:"20"})
// console.log(person.age);

//Change a property
// Object.defineProperty(person,"age",{value:"25"})
// console.log(person.age);

//prevent adding method or property
// Object.preventExtensions(person,"age",{value:"25"});
// console.log(person.age);

//Seal the project->Cannot add any new propery or method
//freeze does not allow to add or change the property
Object.seal(person)
Object.defineProperty(person,"age",{value:"25"})
console.log(person.age);

