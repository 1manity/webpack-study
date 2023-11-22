module.exports = {
    mode: "development",
    entry: "./src/index.js",
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["./loaders/img-loaders.js"]
            }
        ]
    }
}
