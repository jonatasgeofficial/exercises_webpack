const webpack = require('webpack')

module.exports = {
    mode: 'development',
    entry: './ex/index.js',
    output: {
        path: __dirname + '/public',
        filename: './bundle.js'
    },
    devServer: {
        port: 8080,
        contentBase: './public'
    },
    module: {
        rules: [{
            test: /\.js$/,
            use: ['babel-loader']
        }]
    }
}