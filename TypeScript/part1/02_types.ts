let a:number;
a = 133;
//a = 'hello';

let b:string;
b = 'hello';
//b = 123;

let c:boolean = false;
let d = false;
c = true;
d = true;
//c = 123;
//d = 123


function sum(a,b) {
    return a+b;
}

sum(12.12,133);
sum(41,'133');

function sum1(a:number,b:number) {
    return a+b;
}

sum1(12.12,133);
//sum1(41,'133');

function sum2(a:number,b:number):number {
    return 1 + 2;
}
// function sum3(a:number,b:number):number {
//     return a + '133'
// }

