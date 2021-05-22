import {h1} from "./m1";

function sum(a: number,b: number):number {
    return a + b;
}

const obj = {name: "猪八戒",age: "12"};
console.log(obj);


// @ts-ignore
obj.age = 7;
console.log(obj);

console.log(sum(123,456));

console.log("嘿嘿");

console.log(h1);

console.log(Promise);

let fn = (x:number,y:number) => x+y;

// @ts-ignore
fn(77+122);