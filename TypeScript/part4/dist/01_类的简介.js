"use strict";
//使用class关键字定义一个类
class Person {
    constructor() {
        this.name = '猪八戒';
        this.name1 = '孙悟空';
    }
    //定义方法
    sayHello() {
        console.log("hello");
    }
    static sayHello2() {
        console.log("hello");
    }
}
//static readonly age: number = 12;
Person.age = 12;
const person = new Person();
console.log(person);
console.log(person.name);
console.log(Person.age);
//Person.age = 19;
Person.age = 19;
console.log(Person.age);
// console.log(person.age);
// console.log(person.name);
console.log(person.sayHello());
console.log(Person.sayHello2());
console.log(person.name1);
//person.name1 = '猪八戒';
