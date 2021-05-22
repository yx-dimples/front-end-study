const express = require("express");
const app = express();
const path = require('path')
// res.render() 的时候默认去 views 中查找模板文件
// 如果想要修改，可以使用下面的方式
app.set('views', '模板文件存储路径')

// express-art-template 内部依赖了 art-template
app.engine('html', require('express-art-template'))
app.use('/public', express.static(path.join(__dirname, './public')))
app.get("/", (req, res) => res.send("Hello World!"));

app.listen(3000, () =>
    console.log("Serve listening http://127.0.0.1:3000/")
);
