// 1.引入express框架模块
const express = require('express')
// 2.创建宽假核心app对象
const app = express()
// 3.路由
app.get('/stu/:name/:age', function (req,res){
    console.log(req.params)
    res.send('匹配成功，快去看控制台有没有获取数据..')
})



//4.启动服务
app.listen(8080, function(){
    console.log('Running...')
})
