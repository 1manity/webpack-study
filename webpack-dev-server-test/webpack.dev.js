module.exports = {
    mode: "development",
    devtool: "source-map",
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
    }
}
