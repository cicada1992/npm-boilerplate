'use strict';

const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const SRC_DIR = path.join(__dirname, 'src');
const DIST_DIR = path.join(__dirname, 'dist/');
const port = 3000;

const exportConfig = {
  mode: 'production',
  entry: {
    index: ['./src']
  },
  output: {
    path: DIST_DIR,
    filename: 'demo.js',
    publicPath: 'http://localhost:' + port
  },
  target: 'node',
  externals: [
    nodeExternals(),
    {
      react: 'react',
      'react-dom': 'react-dom',
      'styled-components': 'styled-components'
    }
  ],
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
  plugins: [new ForkTsCheckerWebpackPlugin()],
  resolve: {
    extensions: ['.ts', '.tsx'],
    modules: [SRC_DIR, 'node_modules']
  }
};

module.exports = exportConfig;
