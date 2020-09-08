'use strict';

const defaults = require('./webpack.config');
const webpack = require('webpack');
const define = new webpack.DefinePlugin({
  'process.env': { NODE_ENV: JSON.stringify('development') }
});

const config = Object.assign({}, defaults);
config.mode = 'development';
config.devtool = 'inline-source-map';
config.plugins = defaults.plugins.concat([define]);
config.devServer = {
  port: 3000,
  disableHostCheck: true
};
module.exports = config;
