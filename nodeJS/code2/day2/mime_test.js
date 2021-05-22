// 引入第三方模块
const mime = require('mime')

// 调用方法测试
const img = 'xxx.png'
const imgMineType = mime.getType(img)
const imgType = mime.getExtension(imgMineType)
console.log(imgMineType)
console.log(imgType)
