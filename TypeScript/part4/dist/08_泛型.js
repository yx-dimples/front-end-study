"use strict";
/*
*  在定义函数或是类时，如果遇到类型不明确就可以使用泛型
 */
//1.
function fn(a) {
    return a;
}
//可以直接调用具有泛型的函数
let result1 = fn(10); //不指定泛型，TS可以自动对类型进行推断
let result2 = fn('hello'); // 指定泛型
console.log(typeof result1);
console.log(typeof result2);
//2.
function fn2(a, b) {
    console.log(b);
    return a;
}
let a = fn2(123, 'hello'); //number
//T extends Interface 表示泛型T必须是Interface实现类（子类）
function fn3(a) {
    return a.length;
}
//fn3({name: 'hello'})
let result3 = fn3({ length: 3 });
console.log(typeof result3);
//4.
class MyClass {
    constructor(ab) {
        this.ab = ab;
    }
}
const myClass1 = new MyClass('name');
console.log(typeof myClass1.ab);
const myClass2 = new MyClass(123);
console.log(typeof myClass2.ab);
const myClass3 = new MyClass('孙悟空');
console.log(typeof myClass3.ab);
