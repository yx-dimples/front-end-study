// 引入 fs 模块

const fs = require('fs');

//读取 『为学』
function redWeiXue() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/为学.md',((err, data) => {
            if (err)
                reject (err);
            else
                resolve(data)
        }))
    })
}
//读取 『插秧诗』
function redChaYangShi() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/插秧诗.md',((err, data) => {
            if (err)
                reject (err);
            else
                resolve(data)
        }))
    })
}
//读取 『观书有感』
function redGuanShu() {
    return new Promise((resolve, reject) => {
        fs.readFile('./resources/观书有感.md',((err, data) => {
            if (err)
                reject (err);
            else
                resolve(data)
        }))
    })
}

//声明一个 async 函数
async function main() {
    //获取为学内容
    let weixue  = await redWeiXue();
    //获取插秧诗内容
    let chayang = await redChaYangShi();
    //获取观书有感内容
    let guanshu = await redGuanShu();

    console.log(weixue.toString());
    console.log(chayang.toString());
    console.log(guanshu.toString());
}

main();