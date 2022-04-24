const path = require('path')                            //path是Nodejs中的基本包,用来处理路径
const webpack = require("webpack")                      //引入webpack
const {merge} = require("webpack-merge");
const baseConfig = require("./webpack.config.base")
const ExtractPlugin = require("extract-text-webpack-plugin")
const VueServerPlugin = require("vue-server-renderer/server-plugin")

let config

config = merge(baseConfig, {
    target: 'node',
    entry: path.join(__dirname,'../client/server-entry.js'),
    devtool: 'source-map',
    output: {
      libraryTarget: 'commonjs2',
      filename: 'server-entry.js',
      path: path.join(__dirname, '../server-build')
    },
    externals: Object.keys(require('../package.json').dependencies),
    module:{
        rules:[
          {
            test: /\.styl/,
            use: ExtractPlugin.extract({
                fallback: 'vue-style-loader',
                use: [
                    'css-loader',                       //css-loader处理css
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,            //stylus-loader和postcss-loader自己都会生成sourceMap,如果前面stylus-loader已生成了sourceMap
                        }                               //那么postcss-loader可以直接引用前面的sourceMap
                    },
                    'stylus-loader'                     //处理stylus的css预处理器的问题件,转换成css后,抛给上一层的css-loader
                ]
            })
          }
        ]
    },
    plugins: [ //添加两个插件用于hot:true的配置
      new ExtractPlugin('styles.[contentHash:8].css'),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        'process.env.VUE_ENV': '"server"'
      }),
      new VueServerPlugin()
    ]
})

config.resolve = {
  alias: {
    'model': path.join(__dirname, '../client/model/server-model.js')
  }
}

module.exports = config                                 //声明一个config的配置,用于对外暴露
