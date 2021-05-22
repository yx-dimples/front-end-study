//使用class关键字定义一个类
class Person{
    name: string = '猪八戒';
    readonly name1: string = '孙悟空';
    //static readonly age: number = 12;
    static age: number = 12;

    //定义方法
    sayHello(){
        console.log("hello")
    }

    static sayHello2(){
        console.log("hello")
    }

}

const person = new Person ();
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