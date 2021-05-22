// 1.引入express框架模块
const express = require('express')
// 2.创建宽假核心app对象
const app = express()
// 3.声明所有的模板引擎（ps.使用render方法必须）
app.engine('html', require('express-art-template'))
// 4.路由
app.get('/', function (req,res) {

    // 语法：res.render(模板文件，{数组})
    // 练习
    res.render('test.html',{
        username: 'moppet',
        age: '22',
        orders: [
            { id: 1, title: '标题1', prince: 30 },
            { id: 2, title: '标题2', prince: 33 },
            { id: 3, title: '标题3', prince: 36 }
        ]
    })
})
// 5.启动服务
app.listen(8080, function(){
    console.log('Running...')
})
