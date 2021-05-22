"use strict";
class Dog {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    bark() {
        console.log(this.name);
    }
}
//const dog = new Dog();
//console.log(dog.name,dog.age);
//console.log(dog.bark());
const dog = new Dog('樱桃', 3);
console.log(dog);
console.log(dog.bark());
