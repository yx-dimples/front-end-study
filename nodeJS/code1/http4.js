// 响应对象（response）
// res.statusCode = 404;
// res.statusMessage = 'Not Found';
// res.setHeader（'Content-Type', 'text/html; charset=utf-8'）
//
// //简化版
// res.writeHeader(404, 'Not Found', {
//     'Content-Type' : 'text/html; charset=utf8'
// })
//
// res.write（数据）
// res.end()

//1.创建http对象（引入node内置的http模块）
const http = require('http')

//2.创建http服务器（调用http对象createServer）
const server = http.createServer()

//3.监听用户请求(形参：request-请求对象，response-响应对象)
server.on('request', function (req, res){
    // 请求对象（request）
    // 自定义响应头信息
    // 方式一
    res.statusCode = 404
    res.statusMessage = 'Not Found'
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    // 方式二
    // res.writeHeader(404, 'Not Found', {
    // 'Content-Type' : 'text/html; charset=utf8'
    // })

    // 响应请求
    res.write('打印response数据')
    res.end()
})

//4.启动服务器
server.listen(12, function(){
    console.log('服务启动成功，访问：http://localhost:12')
})
