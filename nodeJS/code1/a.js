// 需求：创建a.js和b.js文件，在a.js引入b.js模块



// 外部引入使用
// var 对象 = require(‘路径及文件名’);
// 对象.属性或方法名;
const b = require('./b')

console.log(b)
