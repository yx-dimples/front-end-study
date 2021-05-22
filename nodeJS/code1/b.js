// 步骤1：定义
function add () {
    console.log('this is add fn')
}
function del () {
    console.log('this is del fn')
}
function edit () {
    console.log('this is edit fn')
}
// 步骤2：导出
// 写法1 exports.属性/方法名 = 功能
// exports.add = add
// exports.del = del
// exports.edit = edit
// exports.say = 'hello'

// 写法2 module.exports.属性/方法名 = 变量名;
module.exports.add = add
module.exports.del = del
module.exports.edit = edit
module.exports.say = 'hello'
