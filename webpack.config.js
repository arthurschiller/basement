const path = require('path'),
webpack = require('webpack')

module.exports = {
    context: path.resolve(__dirname, './dev/src/js'),
    entry: {
        main: './main.js',
    },
    output: {
        path: path.resolve(__dirname, './dev/js'),
        filename: './bundle.js'
    },
    resolve: {
        extensions: ['.js', '.json', '.coffee']
    },
    module: {
        rules: [
        {
            test: /\.js$/,
            exclude: [/node_modules|bower_components/],
            loader: 'eslint-loader'
        },
        {
            test: /\.js$/,
            exclude: [/node_modules|bower_components/],
            loader: 'babel-loader',
            options: { presets: ['es2015'] }
        },
        ]
    }
}