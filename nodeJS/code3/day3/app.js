//1.引入express模块
const express = require('express')
//2.创建app对象
const app = express()
//3.配置

//4.路由，没写路径相当于  app.use('/', function(){})
app.use('/', function(req, res, next){
//路由中间件1
    console.log(1)
    next()    //默认nodejs匹配路由成功后，则停止继续匹配
              //解决：通过next方法继续向后匹配（注：必须加next参数才可以用next方法）
})
app.use('/', function(req, res, next){
//路由中间件2
    console.log(2)
    next()
})
//学生列表
app.get('/stu', function(req, res){
    console.log('stu list')
    res.end()
})
//学生添加
app.get('/stu/post', function(req, res){
    console.log('stu post')
    res.end()
})

//5.启动服务
app.listen(3000, function(){
    console.log('启动成功，访问：http://localhost:3000/')
})
