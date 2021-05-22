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
        //调用函数读取目录文件
        const wwDir = 'B:/web'
        fs.readdir(wwDir, function (err, files) {
            //判断是否存在错误
            if (err) {
                return response.end('Can not find www dir')
            }
            // 核心1.生成需要替换的内容
            let content = ''
            files.forEach(function (item) {
                // 在JS中，核心三部分：ECMAScript  DOM  BOM
                // EC5老方法：换行拼接，可读性查
                // EC6新方法：` 避免换行拼接，并且可通过语法${} 输出变量
                content += `
                <tr>
                    <td><a class="icon" href="javascript:void(0);">${item}</a></td>
                    <td></td>
                    <td>2021/05/14 下午17:37:30</td>
                </tr>
                `
            })
            let html
            // 获取数据
            html = data.toString()
            html = html.replace('^_^', content)

            //响应数据
            response.setHeader('Content-Type', 'text/html; charset=utf-8')
            response.write(html)
            response.end()
        })
    })
})
//5.启动服务器
server.listen(12, function(){
    console.log('服务启动成功，访问：http://localhost:12')
})

