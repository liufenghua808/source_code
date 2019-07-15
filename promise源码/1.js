//Promise 解决的问题
//1）回调嵌套  回调地狱
//2）错误捕获不好处理错误
//3）多个异步同步的问题 Promise.all
//还是基于回调的方式的


//Promise是一个类 默认浏览器 高版本 node 都自带了
//es6-promise

//Promise  规范文档 promise A+ 规范
//promise 三个状态：  等待 成功态  失败态
//只有等待态才能变成成功 / 失败
//如果状态变化后不能再修改状态

//let Promise = require('./promise');
let fs = require('fs');

let p = new Promise((resolve, reject) => {  //executor 执行器  一上来就执行
    //默认 pendding 
    console.log('executor')

    //读取文件成功后，才调用成功
   throw new Error('出错了！');
    // fs.readFile('./1.txt', 'utf-8', function (err, data) {
    //     if (err) {
    //         return reject(err);
    //     }
    //     resolve(data);
    // })
    setTimeout(function(){
        console.log(1)
        reject(123);
        console.log(2)
    },0)
    // resolve('成功内容'); //变成成功
    // reject('失败原因');  //不能变成失败

})
console.log('hello')

//每个promise的实例都有一个then方法
//promise有多个状态，如果成功会让成功的函数 依次执行
//如果失败会让失败的函数 依次执行

p.then((value) => {  //fulfilled
    console.log('成功', value);
   
}, (reason) => {
    console.log('失败', reason)
}).catch(()=>{
    console.log('shibai')
}).then((value)=>{
    console.log(213)
},(res)=>{
console.log('shibai')
})
// p.then((value) => {  //fulfilled
//     console.log('成功', value);
// }, (reason) => {
//     console.log('失败', reason)
// })
