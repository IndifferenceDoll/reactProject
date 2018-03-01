const path = require('path')
const webpack = require('webpack')

module.exports = {
    // 入口
    // entry:path.join(__dirname,'src//index.js'),
    entry:[
        // "webpack-dev-server/client?http://0.0.0.0:8888",
        // "webpack/hot/only-dev-server",
        'react-hot-loader/patch',
        path.join(__dirname,'src/index.js')
    ],

    // 输出到dist文件夹，输出文件名字为bundle.js
    output:{
        path:path.join(__dirname,'./dist'),
        filename:'bundle.js'
    },
    module:{
        // loaders:[
        //     {
        //       test:/\.js$/,
        //       loader:'react-hot',
        //       exclude: /node_modules/
        //     }
        // ],
        rules:[
            {
              test: /\.js$/,
              loader: 'eslint-loader', //若用多个，则use:['','']
              enforce: 'pre',
            //   include:path.join(__dirname,'src'),
              exclude: /node_modules/
            },
            {
              test:/\.js$/,
              use:['babel-loader?cacheDirectory=true,presets[]=react,presets[]=es2015'],
              include:path.join(__dirname,'src')
            }
        ]
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
       new webpack.LoaderOptionsPlugin({
        // test: /\.xxx$/, // may apply this only for some modules
        options: {
          eslint: './.eslintrc'
        }
      })
    ],
    resolve:{
        alias:{
            pages:path.join(__dirname,'src/pages'),
            component:path.join(__dirname,'src/component'),
            router:path.join(__dirname,'src/router'),
            actions:path.join(__dirname,'src/redux/actions'),
            reducers:path.join(__dirname,'src/redux/reducers')
        }
    }
}

// 引用中的const webpack = require('webpack')
// devServer中的hot:true
// plugins中的new webpack.HotModuleReplacementPlugin()
//以上三个组合起来实现热重载的效果，相当于package.json中的script脚本dev命令后面加--hot