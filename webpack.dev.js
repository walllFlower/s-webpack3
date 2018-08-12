const webpack = require('webpack');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.config.js');

module.exports = merge(baseConfig,{
    mode: 'development', //不需要再配置DefinePlugin

    devTool: 'cheap-module-eval-source-map',

    devServer:{
        inline: true,
        hot: true
    },

    plugins:[
        new webpack.HotModuleReplacementPlugin(),
    ]
})