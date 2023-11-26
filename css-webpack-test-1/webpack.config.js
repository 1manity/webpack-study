const {resolve} = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");
module.exports = {
    mode: "development",
    entry: {
        main: "./src/index.js", // 默认入口文件 chunk的名称： 入口模块
    }, // 配置有几个chunk
    output: {
        path: resolve(__dirname, "dist"), // 绝对路径 表示资源放置的路径
        filename: "[name].[hash].js" // 配置的合并的js文件的规则
    },
    module: {
        rules: [
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.png$/, use: ['file-loader'] },

        ]
    },
    plugins: [
        new HtmlWebpackPlugin(),
        new CleanWebpackPlugin()
    ]
}
