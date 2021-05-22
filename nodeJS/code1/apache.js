// for..in
// 作用：遍历数据和对象
// 语法：for (index in 数组/对象)

// forEach
// 作用：遍历数组
// 语法：数组.forEach(function(值，下标){})

//1.声明数组
const arrs = new Array('a', 'b' ,'c')

//2.使用for..in语法
for (index in arrs) {
    console.log(index + '--' + arrs[index])
}

console.log('============')

//3.使用forEach语法
arrs.forEach(function (item, index){
    console.log(index + '--' + item)
})
