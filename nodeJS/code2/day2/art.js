//1.引入第三方模块EJS
const art = require('art-template')

//2.调用render方法，将字符串替换成HTML
// var html = '<h1><%= username %></h1>';
// var result = art.render(html, {username: '张三'});
// console.log(result);

//2.调用renderFile方法，将字符串替换成HTML
const html = art(__dirname + '/art.html', {
   username: 'moppet',
   age: '22',
   orders: [
        { id: 1, title: '标题1', prince: 30 },
        { id: 2, title: '标题2', prince: 33 },
        { id: 3, title: '标题3', prince: 36 }
   ]
})
console.log(html)

