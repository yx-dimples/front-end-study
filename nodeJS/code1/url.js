// 需求：获取网址http://itcast.cn?name=张三&age=18中的参数


// 1. 创建url对象(引入nodejs内置url模块)
const url = require('模块/url')
// 2. 调用url对象方法
const wangzhi = 'https://itcast.cn?name=张三&age=18'
console.log(url.parse(wangzhi))
console.log(url.parse(wangzhi, true))

const param = url.parse(wangzhi, true).query
console.log(param)
console.log(param.name)
console.log(param.age)
