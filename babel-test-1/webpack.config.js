module.exports = {
    mode: 'development',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                include: /src/,
                use: [
                    {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env']
                    }
                    },
                    "thread-loader",
                    "babel-loader"
                ]
            }
        ]
    }
}
