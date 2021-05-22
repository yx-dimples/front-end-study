// 1.引入express框架模块
const express = require('express')
// 2.创建宽假核心app对象
const app = express()
// 3.路由
app.get('/', function (req,res) {
    //Express响应数据方法
    //end    - 响应字符串
    //send   - 响应字符串（自动识别数据类型）
    //render - 响应字符串（可以获取指定文件字符串并响应，缺点：得自己声明模板引擎）

    //res.end("哥哥来抓我呀，<a href='http://nn.com'>点击进入我的世界</a>")
    res.send("哥哥来抓我呀，<a href='https://nn.com'>点击进入我的世界</a>")

})
//4.启动服务
app.listen(8080, function(){
    console.log('Running...')
})
