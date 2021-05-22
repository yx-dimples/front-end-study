// //1.创建fs对象（引入node内置的fs模块）
const fs = require('fs')

// //2.调用函数写数据进文件
// fs.writeFile(路径及文件名，数据，function(err){
fs.writeFile('./a.txt', '你好', function (err){
    //     err  为null - 则写入成功
    //     err不为null - 则写入失败
    if (err) {
        console.log(err)
        return
    }
    console.log('写入成功')
})
