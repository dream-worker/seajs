// 定义chushi模块
define(function(require, exports , module){
    console.log('我是厨师模块,chushi.js')
    // 厨师要得到香菇才能做饭
    var myXianggu = require('./xianggu')
    console.log(myXianggu.data)

    // 我们还要油菜!
    var myYoucai = require('./youcai')
    console.log(myYoucai)
})