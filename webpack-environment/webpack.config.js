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
module.exports = (env)=> {
    console.log(env)
    if (env && env.production) {
        return require("./webpack.pro.js")
    }
    else {
        return require("./webpack.dev.js")

    }
}
