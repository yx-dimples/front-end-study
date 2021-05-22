// 说明
// nodejs作用：1-提高JS运行环境
//            2-提供N多模块（API）让JS更强大

//1.创建http对象（引入node内置的http模块）
const http = require('http')

//2.创建http服务器（调用http对象createServer）
const server = http.createServer()

//3.监听用户请求(形参：request-请求对象，response-响应对象)
server.on('request', function (request, response){
    // 有请求DOS窗口就输出
    console.log('收到客户端请求了，请求路径是：' + request.url)
    // 响应请求
    // write方法：声明给客户端发送的数据
    // end方法：结束响应
    response.write('hello，')
    response.write('itcast')
    response.end()
})

//4.启动服务器
server.listen(12, function(){
    console.log('服务启动成功，访问：http://localhost:12')
})
