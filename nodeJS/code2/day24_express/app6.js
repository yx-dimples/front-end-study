// 1.引入express框架模块
const express = require('express')
const fs = require('fs')
// 2.创建框架核心app对象
const app = express()
// 3.路由
// 指定文件
// app.get('/public/css/test.css', function(req, res){
// 	fs.readFile('./' + req.url, function(err,data){
// 		res.send(data.toString())
// 	})
// })
// 多个文件
// app.use('/public', function(req, res){
// 	fs.readFile('./public' + req.url, function(err,data){
// 		res.send(data.toString())
// 	})
// })
// 在express中
// 作用：允许指定目录下的文件被外访问
// 语法：express.static('目录名')
// 返回：一个函数，可理解为读取URL需要读取的文件
app.use('/public', express.static('public'))


//4.启动服务
app.listen(8080, function(){
    console.log('Running...')
})
