// module.exports = (env)=> {
//     console.log(env)
//     if (env && env.production) {
//         return {
//             mode: "production",
//             devtool: "none",
//         }
//     }
//     else {
//         return module.exports = {
//             mode: "development",
//             devtool: "source-map",
//         }
//
//     }
// }
// module.exports = (env)=> {
//     console.log(env)
//     if (env && env.production) {
//         return require("./webpack.pro.js")
//     }
//     else {
//         return require("./webpack.dev.js")
//
//     }
// }
const webpack = require("webpack");
module.exports = {
    mode: "development",
    devtool: "source-map",
    output: {
        publicPath: "",
    },
    stats: {
        colors: true
    },
    devServer: {
        port: 8000,
        open: true,
        index: "index.html",
        proxy: {
            '/api': {
                target: 'http://localhost:3000',
                changeOrigin: true,
            }
        }
    },
    module: {
        rules: [{
            test: /\.(jpg|png|gif|svg|eot|ttf|woff|woff2)$/,
            use: ["file-loader"]
        }

        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            PI: `Math.PI`, // PI = Math.PI
            VERSION: `"1.0.0"`, // VERSION = "1.0.0"
            DOMAIN: JSON.stringify("1manity.top")
        }),
        new webpack.BannerPlugin({
            banner: `
  hash:[hash]
  chunkhash:[chunkhash]
  name:[name]
  author:1manity
  `
        })
    ]
}
