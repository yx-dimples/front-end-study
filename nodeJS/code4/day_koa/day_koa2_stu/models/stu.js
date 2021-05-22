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
// connection.query("insert into stu values (1, '李三', 18, '男')", function (error, results, fields) {
//     if (error)
//         throw error
//     console.log('this solution is:', results)
// })
exports.mysql = (sql) => {
    const promise = new Promise(function (resolve, reject) {
        connection.query(sql, function (error, results, fields) {
            if (error)
                reject(error) // 数据处理出错
            resolve(results) // 数据处理完成
        })
    })
    return promise
}
// 5.关闭连接
// connection.end()
