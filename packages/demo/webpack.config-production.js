'use strict';

const defaults = require('./webpack.config');

const config = Object.assign({}, defaults);

config.mode = 'production';
config.devtool = 'source-map';
config.output.publicPath = '';

module.exports = config;
