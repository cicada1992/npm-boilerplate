'use strict';
const webpack = require('webpack');
const WebpackDevServer = require('webpack-dev-server');
const config = require('./webpack.config-development');

const port = 3000;

new WebpackDevServer(webpack(config), {
  publicPath: config.output.publicPath,
  hot: true,
  historyApiFallback: true
}).listen(port, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log('Listening at http://localhost:3000/');
});
