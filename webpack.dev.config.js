const path = require('path')
// const webpack = require('webpack')

module.exports = {
    // 入口
    // entry:path.join(__dirname,'src//index.js'),
    entry:[
        'react-hot-loader/patch',
        path.join(__dirname,'src/index.js')
    ],

    // 输出到dist文件夹，输出文件名字为bundle.js
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        rules:[{
            test:/\.js$/,
            use:['babel-loader?cacheDirectory=true'],
            include:path.join(__dirname,'src')
        }]
    },
    devServer:{
        port:8888,
        contentBase:path.join(__dirname,'./dist'),
        historyApiFallback:true,
        host:'0.0.0.0',
        // hot:true
    },
    plugins:[
        // new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router'),
            actions:path.join(__dirname,'src/redux/actions'),
            reducers:path.join(__dirname,'src/redux/reducers'),
            redux:path.join(__dirname,'src/redux')
        }
    }
}

// 引用中的const webpack = require('webpack')
// devServer中的hot:true
// plugins中的new webpack.HotModuleReplacementPlugin()
//以上三个组合起来实现热重载的效果，相当于package.json中的script脚本dev命令后面加--hot