"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this._name = name;
            this._age = age;
        }
        /*
        *  getter方法用来读取属性
        *  setter方法用来设置属性
        *    - 它们被称为属性的存储器
         */
        // js中设置 getter setter
        // // 定义方法，来获取name属性
        //         // getName(){
        //         //     return this._name;
        //         // }
        //         // // 定义方法，来设置name属性
        //         // setName(value: string){
        //         //     this._name = value
        //         // }
        //         //
        //         // // 定义方法，来获取age属性
        //         // getAge(){
        //         //     return this._age;
        //         // }
        //         // // 定义方法，来设置name属性
        //         // setAge(value: number){
        //         //     // 判断年龄是否合法
        //         //     if (value >= 0) {
        //         //         this._age = value
        //         //     }
        //         // }
        // TS 中设置getter setter方法的方式
        get name() {
            return this._name;
        }
        set name(value) {
            this._name = value;
        }
        get age() {
            return this._age;
        }
        set age(value) {
            if (value >= 0) {
                this._age = value;
            }
        }
    }
    const per = new Person('孙悟空', 18);
    /*
    *  现在的属性是在对象中设置的，属性可以任意的修改
    *    属性可以在任意地方修改将会导致对象中的数据变得非常不安全
     */
    per.name = '猪八戒';
    per.age = -23;
    console.log(per.name);
    console.log(per.age);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    const b = new B(12);
    b.test();
    //b.num = 22
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('唐僧', 12);
    console.log(c);
})();
