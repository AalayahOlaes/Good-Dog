const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: process.env.NODE_ENV,
    entry: {
        src: '/client/index.js'
    },
    output: {
        filename: 'bundle.js',
        publicPath: '/',
        path: path.resolve(__dirname, build)
    }, 
    module: {
        rules: [
            {
                test: /\.jsx?/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                options: {
                    presets: [ '@bable/env', '@babel/react']
                }
            },
            {
                test: /\.s?css/,
                use: [ 'style-loader', 'css-loader', 'sass-loader']
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Development',
            template: 'index.html'
        }),
    ],
    devServer: {
        static: {
            publicPath: '/build',
            directory: path.resolve(__dirname, 'build')
        },
        proxy: {
            '/api': 'http://localhost:3000'
        }
    }
}