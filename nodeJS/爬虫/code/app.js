const puppeteer = require('puppeteer')


;(async function () {
    const browser = await puppeteer.launch({
        slowMo: 500,
        devtools: true
    })
    const page = await browser.newPage()
    console.log('开启页面')
    await page.goto('https://image.baidu.com')
    await page.focus('#kw')
    await page.keyboard.sendCharacter('saber 1920*1080')
    await page.click('.s_newBtn')
    console.log('page go saber')
    page.on('load', async function () {
        const result = await page.evaluate(async ()=>{
            const images = document.getElementsByClassName('main_img')
            console.log(images)
        })
    })
    // await browser.close()
})()
