// 1.引用MySQL模块
const mysql = require('mysql')
// 2.创建连接账号
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'nodejs'
})
// 3.连接
connection.connect()
// 4.发送SQL （增）
connection.query("insert into stu values (null, 'm1', '33', 33, '男', '2011-01-01')", function (error, results, fields) {
    if (error)
      throw error
    console.log('this solution is:', results)
})

// 5.关闭连接
connection.end()
