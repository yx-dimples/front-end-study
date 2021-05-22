//dirname  去最后一个
//basename 取最后一个

//1.创建path对象（引入nodejs内置path模块）
const path = require("模块/path")
//2.调用path对象方法
const testData = 'c:/app/view/godos/add.html'
console.log(path.extname(testData));
console.log(path.basename(testData));
console.log(path.dirname(testData));
console.log(path.dirname(path.dirname(testData)));
