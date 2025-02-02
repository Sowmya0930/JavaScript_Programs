const obj1 = {
    name:"Sowmya",
    age:25,
    myFuntion: function(){
        return`My name is ${this.name} and age is ${this.age}`
    }
}
const obj2 ={
    name:"Jock",
    age:20
}

console.log(obj1.myFuntion.call(obj2));