'use strict';

// CONSTANTS
const ENV = process.env.NODE_ENV,
  path = require('path'),
  webpack = require('webpack');

// PLUGINS
const CopyWebpackPlugin = require('copy-webpack-plugin'),
  HtmlWebpackPlugin = require('html-webpack-plugin'),
  ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {

  entry: {
    vendor: [
      './client/polyfills.ts',
      './client/vendor.ts'
    ],
    app: [
      './client/main.ts'
    ]
  },

  resolve: {
    extensions: ['.ts', '.js']
  },

  // LOADERS
  module: {
    rules: [
      { // ASSETS
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        use: [{
          loader: 'file-loader'
        }]
      },
      { // HTML
        test: /\.html$/,
        use: { loader: 'html-loader' }
      },
      { // JSON
        test: /\.json$/,
        use: { loader: 'json-loader'}
      },
      { // PUG
        test: /\.pug$/,
        use: {loader: 'pug-html-loader'}
      },
      { // SASS
        test: /\.(css|scss)$/,
        use: ['to-string-loader'].concat(ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [{loader: 'css-loader'}, {loader:'sass-loader'}]
        }))
      },
      { // TYPESCRIPT
        test: /\.ts$/,
        use: [
          {loader: 'awesome-typescript-loader'},
          {loader: 'angular2-template-loader'},
          {loader: '@angularclass/hmr-loader'},
          {loader: 'angular2-router-loader'}
        ]
      }
    ]
  },

  // PLUGINS
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/styles.css',
      allChunks: true,
      disable: false
    }),

    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': ENV
      }
    }),

    // Add vendor module to separate file
    new webpack.optimize.CommonsChunkPlugin(
      {
        name: 'vendor',
        minChunks: Infinity
      }
    ),

    // Copy assets from the public folder
    new CopyWebpackPlugin([{
      from: './public'
    }]),

    new HtmlWebpackPlugin({
      filetype: 'pug',
      template: path.resolve(__dirname, '../index.pug')
    })
  ]

};

module.exports = config;
