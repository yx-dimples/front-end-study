"use strict";
(function () {
    /*
    *  定义类时，可以使类去实现一个接口
    *     实现接口就是使类满足接口的要求
     */
    class MyClass {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('hello');
        }
    }
    const abj = {
        name: '孙悟空',
        age: 123,
        gender: '男'
    };
    console.log(abj);
    const myClass = new MyClass('12');
    myClass.sayHello();
})();
