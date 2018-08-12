const merge = require('webpack-merge');
const baseconfig = require('./webpack.config.js');

module.exports = merge(baseconfig,{
    mode: 'production',

    devtool: 'cheap-module-source-map'
})