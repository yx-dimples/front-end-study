// 1.创建fs对象（引入node内置的fs模块）
const fs = require('fs')

// 2.调用函数读取目录文件
fs.readdir('B:/web', function (err, files) {
    //判断是否存在错误
    if (err) {
        console.log(err)
        return
    }

    // console.log(files); //数组，里面是目录中的文件名

    files.forEach(function (item, index) {
        console.log(index + '___' + item)
    })
})
