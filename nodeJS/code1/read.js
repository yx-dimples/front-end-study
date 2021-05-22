//1.创建fs对象（引入node内置的fs模块）
const fs = require('fs');

//2.调用函数从文件读数据
// fs.readFile(路径及文件名，数据，function(err){
fs.readFile('./a.txt',function (err, data){
    // err  为null - 则写入成功
    // err不为null - 则写入失败
    if (err) {
        console.log(err)
        return
    }
    console.log(data) // 脚下留心：默认不是我们可识别的内容
                      // Buffer
                      // 通过Buffer对象.toString() 转化为字符显示
    console.log(data.toString())
})

// 多学一招：前期读的时候就声明获取
fs.readFile('./a.txt', 'utf8', function (err, data){
    if (err) {
        console.log(err)
        return
    }
    console.log(data)
})
