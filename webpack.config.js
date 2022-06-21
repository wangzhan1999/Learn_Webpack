const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const {VueLoaderPlugin} = require('vue-loader');
const webpack = require('webpack');
const isProduction = process.env.NODE_ENV === 'production';

const myFirstWebpackAppConfig = {
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                loader: 'ts-loader',
                options: {
                  appendTsSuffixTo: [/\.vue$/],
                },
                exclude: /node_modules/,
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
            },
            {test: /\.html$/i,use:'html-loader'},
            {
                test: /\.(png|jpg|gif|ico)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: {}
                  }
                ]
              },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader"
                }, {
                    loader: "css-loader",options:{
                    }
                }, {
                    loader: "less-loader", options: {
                        strictMath: true,
                        noIeCompat: true,
                        javascriptEnabled:true,
                        math: 'always',
                        strictMath: false,
                        modifyVars: {
                            'primary-color': '#1b1b1b',
                            'link-color': '#1b1b1b',
                            'border-radius-base': '2px',
                        },
                        javascriptEnabled: true,
                    }
                }]
            },
            {test: /\.css$/,use: [ 'style-loader', 'css-loader']},
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            }
            
        ]
    },
    plugins:[
        new webpack.DefinePlugin({
            "__VUE_OPTIONS_API__": true,
            "__VUE_PROD_DEVTOOLS__": false,
        }),
        new VueLoaderPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: './src/assets/index.html',
            filename: 'index.html',
            inject: 'body'
        })
    ],
    devtool: 'eval-source-map',
    devServer: {
        client: {
            progress: true,
          },
        port: 8080,
        static: path.resolve(__dirname, 'dist'),  // 根目录
        open: true,  // 自动打开浏览器
        compress: true,  // 启动 gzip 压缩
        hot: true
    },
    entry: {
        index: [
            // 对应自己本地项目端口
            'webpack-dev-server/client?http://localhost:8080/',
            'webpack/hot/dev-server',
            './src/index.ts'
        ]
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'my-first-webpack-bundle.js'
    },
    resolve: {
        extensions:['.ts','.tsx','.js','.vue']
    },
    mode: isProduction ? 'production' : 'development'
}
module.exports = myFirstWebpackAppConfig