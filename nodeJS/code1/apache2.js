// 1.创建http对象（引入node内置的http模块）
const http = require('http')
// 2.创建fs对象（引入node内置的fs模块）
const fs = require('fs')

// 3.创建http服务器（调用http对象createServer）
const server = http.createServer()

// 4.监听用户请求(形参：request-请求对象，response-响应对象)
server.on('request', function (request, response) {
    // 4.1读取文件
    fs.readFile('./apachetpl.html', function (err, data) {
        //判断是否存在错误
        if (err) {
            console.log(err)
            return
        }
        // 获取数据
        const html = data.toString()

        //响应数据
        response.setHeader('Content-Type', 'text/html; charset=utf-8')
        response.write(html)
        response.end()
    })
})

//5.启动服务器
server.listen(12, function(){
    console.log('服务启动成功，访问：http://localhost:12')
})

