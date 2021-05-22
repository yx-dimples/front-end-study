(function () {
    //定义个Animal类
    class Animal{
        name: string;
        age: number;

        constructor(name: string, age: number) {
            this.name = name;
            this.age = age
        }

        sayHello(){
            console.log("动物再叫");
        }
    }

    /*
    * Dog extends Animal
    *   - 此时，Animal被称为父类，Dog被称为子类
    *   - 使用继承后，子类将会拥有父类所有的方法和属性
    *   - 通过继承可以将多个类中共有的代码写在一个父类中，
    *       这样只需要写一个即可让所有的子类都同上拥有父类所有的方法和属性
    *       希望在子类中添加一些父类中没有的属性或方法直接加就行
     */
    //定义一个表示狗的类
    //使 Dog 类继承 Animal
    class Dog extends Animal{
        run(){
            console.log(`${this.name}在跑`)
        }
    }

    // 定义一个猫的类
    //使 Cat 类继承 Animal
    class Cat extends Animal{}

    const dog = new Dog('皮蛋',2);
    const cat = new Cat('樱桃',1);

    console.log(dog)
    dog.sayHello()
    dog.run()
    console.log(cat)
    cat.sayHello()
    //cat.run()
})();
