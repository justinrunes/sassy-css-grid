const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
    entry: ['./src/app.js', './src/scss/main.scss'],
    output: {
      filename: 'dist/app.bundle.js'
    },
    module: {
      rules: [
        { // regular css files
          test: /\.css$/,
          loader: ExtractTextPlugin.extract({
            use: 'css-loader?importLoaders=1',
          }),
        },
        { // sass / scss loader for webpack
          test: /\.(sass|scss)$/,
          loader: ExtractTextPlugin.extract(['css-loader', 'sass-loader'])
        }
      ]
    },
    plugins: [
      new ExtractTextPlugin({ // define where to save the file
        filename: 'dist/[name].bundle.css',
        allChunks: true,
      }),
      new UglifyJsPlugin({
        test: /\.js($|\?)/i
      })
    ],
  };