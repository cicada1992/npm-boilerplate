'use strict';

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist/');
const port = 3000;

const exportConfig = {
  entry: {
    demo: ['./src']
  },
  output: {
    path: DIST_DIR,
    filename: 'demo.js',
    publicPath: 'http://localhost:' + port
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx|js|jsx)$/,
        use: {
          loader: 'babel-loader'
        },
        exclude: /node_modules/
      },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|jpg|gif|csv)$/, loader: 'url-loader' },
      {
        test: /\.svg$/,
        use: {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: {
                removeViewBox: false
              }
            }
          }
        }
      }
    ]
  },
  plugins: [
    new ForkTsCheckerWebpackPlugin(),
    new HtmlWebpackPlugin({ title: 'Demo for RCT', template: 'src/index.html' })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [SRC_DIR, path.join(__dirname, 'node_modules'), 'node_modules']
  }
};

module.exports = exportConfig;
