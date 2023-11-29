const {CleanWebpackPlugin} = require("clean-webpack-plugin");
const WebpackBundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
module.exports = {
    mode: 'production',
    devtool: 'source-map',
    entry: {
        index: './src/index.js',
      // main1: './src/main1.js',
      // main2: './src/main2.js'
    },
    output: {
        filename: '[name].[hash:5].js',
    },
    plugins: [
        new CleanWebpackPlugin(),
        new WebpackBundleAnalyzer()
    ],
    optimization: {
        splitChunks: {
            // 分包策略
            chunks: 'all',
            // maxSize: 60*1024,
            automaticNameDelimiter: '.',
            minSize: 30000, // 默认值 很不错的值
            minChunks: 1, // 默认值 很不错的值
            cacheGroups: {
                // 属性名是缓存组名称，会影响到分包的chunk名
                // 属性值是缓存组的配置，缓存组继承所有的全局配置，也有自己特殊的配置
                vendors: {
                    test: /[\\/]node_modules[\\/]/, // 当匹配到相应模块时，将这些模块进行单独打包
                    priority: -10 // 缓存组优先级，优先级越高，该策略越先进行处理，默认值为0
                },
                default: {
                    minChunks: 2,  // 覆盖全局配置，将最小chunk引用数改为2
                    priority: -20, // 优先级
                    reuseExistingChunk: true // 重用已经被分离出去的chunk
                }
            }
        }
    },
    stats: {
        colors: true,
        chunks: false,
        modules: false
    }
}
