module.exports = {
    mode: "development",
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'dist/bundle.js'
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                {loader: 'style-loader'},
                {loader: 'css-loader'}
            ]
        }]
    },
    devServer: {
        publicPath: '/aaa/bbb'
    }
}
