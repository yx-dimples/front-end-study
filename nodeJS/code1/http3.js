// 请求对象（request）
// req.headers     	获取请求头信息（对象）
// req.rawHeaders 	获取请求头信息（数组）
// req.httpVersion 	获取HTTP版本
// req.method			获取请求方法
// req.url         		获取请求路径（注：不含网址）




//1.创建http对象（引入node内置的http模块）
const http = require('http')

//2.创建http服务器（调用http对象createServer）
const server = http.createServer()

//3.监听用户请求(形参：request-请求对象，response-响应对象)
server.on('request', function (req, res){
    // 请求对象（request）
    console.log(req.headers) //获取请求头信息（对象）
    console.log(req.rawHeaders) //获取请求头信息（数组）
    console.log(req.httpVersion) // 获取HTTP版本
    console.log(req.method)  // 获取请求方法
    console.log(req.url) //获取请求路径（注：不含网址）
    // 响应请求
    res.write('打印request数据')
    res.end()
})

//4.启动服务器
server.listen(12, function(){
    console.log('服务启动成功，访问：http://localhost:12')
})
