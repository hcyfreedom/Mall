/**
 * Created by Acer on 2017/2/21.
 */
// var webpack = require('webpack');
var path = require('path')
var config = {
    entry: path.resolve(__dirname, './component/main.js'),


    output: {
        path:path.resolve(__dirname,""),
        filename: 'index.js',
    },

    devServer: {
        host: '0.0.0.0',
        // hot: true,
        port:7778,
        inline: true,
        historyApiFallback: true,
        proxy: {
            '/api': {
                target: 'http://localhost:3000/',
                secure: false
            }
        }
    },

    module: {
        loaders: [ {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',

            query: {
                presets: ['es2015', 'react']
            },

        },
            {
                test: /\.css$/,
                loader: 'style!css',
                include: __dirname,
            },
            {test: /\.(jpg|png|svg)$/, loader: "url?limit=8192"},
        ]
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin(),
    //     new webpack.NamedModulesPlugin(),
    // ],

}

module.exports = config;
