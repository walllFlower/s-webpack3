const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig,{
    mode: 'development',

    devTool: 'cheap-module-eval-source-map',

    devServer:{
        inline: true,
        hot: true
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})