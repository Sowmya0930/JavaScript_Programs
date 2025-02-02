//class ->used for OOPS programing 
//      it uses constructor to initiate the properties
//      you can create the instances of the class suing new keyword

//==========properties initialized
// class Person{
//     constructor(name,id){
//         this.Name=name;
//         this.ID=id;
//     }
// }

// let person1=new Person("Nick",10)
// console.log(person1);


//==========methid initialized
// class Person{
//     constructor(name,id){
//         this.Name=name;
//         this.ID=id;
//     }
//     myFunction() {
//         return `Student name is ${this.Name} and ID is ${this.ID}`
//     }
// }

// let person1=new Person("Nick",10);
// let person2=new Person("John",15)
// let person3=new Person("peter",20)
// let person4=new Person("joey",30)
// console.log(person1.myFunction());
// console.log(person2.myFunction());
// console.log(person3.myFunction());
// console.log(person4.myFunction());



// class inheritence: inherites the properties and methods uses "extends" keyword
// class Car{
//     constructor(name){
//         this.name=name       
//     }
//     myCarFun(){
//         return `My car is ${this.name}`
//     }
// }
// class BroughtYear extends Car {
//     constructor(name,brand){
//         super(name)
//         this.brand=brand
//     }
//     show(){
//         return `${this.myCarFun} and model is ${this.brand}`
//     }
// }
// let myCar= new BroughtYear("Tayota",2011)

//Static: If you mention any method as static you cannot acces that method
//using object of the call but you can access using call
