// import { b } from './m'
let number = 10;
console.log(number);
// console.log(b);

//let b;

function fn(a:number,b:number) {
    return a + b;
}

// function fn3(){
//     alert(this);
// }

function fn2(this: any){
    alert(this);
}

let box1 = document.getElementById('box1');  //getElementById 里面的 box1不存在 所有为空值
// // if (box1 !== null){
// //     box1.addEventListener('click',function () {
// //         alert('hello');
// //     });
// // }

box1?.addEventListener('click',function () {
    alert('hello');
});