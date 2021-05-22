(function () {
    class Animal{
        name: string;

        constructor(name: string) {
            this.name = name
        }

        sayHello(){
            console.log("动物在打招呼~~")
        }
    }
    class Dog extends Animal{
        age: number
        constructor(name: string,age: number) {
            // 如果子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
            super(name); //在调用父类的构造函数
            this.age = age
        }
        sayHello() {
            // 在类的方法中 super 就表示当前的类
            //super.sayHello();
            console.log("汪汪汪")
        }
    }
    const dog = new Dog('旺财',3)
    dog.sayHello()
})()
