//Class name should be uppercase,add constructor method inside class
//using constructor create many objects
// class Car{
//     constructor(){
//     }
// }

// class Car {                //creating class 
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     myFun1() {
//         return `My car is ${this.name}`
//     }
//     myFun2(){
//         return `Bought a car in ${this.year}`

//     }
// }

// let car1 = new Car("Tayota",2011)
// // let car2 =new Car("Honda",2010)
// console.log(car1.myFun1());


//===============================
//Class Inheritence -> Inherits the properties from parent Class
//Use super() to inherits the properties and methods

// class Car {
//     constructor(name){
//         this.name=name;
//     }
//     myFunc(){
//         return `my cars is ${this.name}`
//     }
// }
// class NewCar extends Car {
//     constructor(name,year){
//         super(name);
//         this.name=name;
//         this.year=year;
//     }
//     myFunction(){
//         return this.myFunc() + ` and year is ${this.year}`
//     }
    
// }
// const car1=new NewCar("Tayota",2011)
// console.log(car1.myFunction());

//=========================
//Satic methods->If we define a method as static then we cannot access them using that 
//object but can access using class 

class Car {
    constructor(name, year){
        this.name=name;
        this.year=year;
    }
    static show(){
        return `My car is ${this.name} and year is ${this.year}`
    }
}
const car1=new Car("Tayota", 2011);
console.log(car1.show());     //throughs error
console.log(Car.show());
