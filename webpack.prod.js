const merge = require('webpack-merge');
const baseconfig = require('./webpack.config.js');

module.exports = merge(baseconfig,{
    mode: 'production', //不需要再配置DefinePlugin

    devtool: 'cheap-module-source-map'
})