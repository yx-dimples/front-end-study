const router = require('koa-router')()

router.prefix('/stu')

const stuModel = require('../models/stu')

router.get('/', async function (ctx, next) {
    // 1. 获取数据
    const data = await stuModel.mysql("select * from stu")
    // ctx.body = 'this is stu list page'
    await ctx.render('home', {
        stus: data
    })
})

router.get('/create', function (ctx, next) {
    // ctx.body = 'this is create list page'
    // 加载视图
    ctx.render('post')
})

router.get('/docreate', async function (ctx, next) {
    // ctx.body = 'this is stu  docreate'
    // 1-接受数据
    // { name: 'asd', pwd: '123e', age: 123, sex: '男'}
    // console.log(ctx.query)
    const getData = ctx.query
    // 2-过滤
    // 3-入库
    const data = await stuModel.mysql(`
    insert into stu values 
    (null,)
    `)
    // 4.判断跳转
    ctx.response.redirect('/stu')
})

module.exports = router
