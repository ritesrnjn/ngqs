const webpackMerge = require('webpack-merge'),
  commonConfig = require('./webpack.common.js'),
  webpack = require('webpack'),
  path = require('path');

module.exports = webpackMerge(commonConfig, {

  devtool: 'cheap-module-source-map',

  output: {
    path: path.resolve(__dirname, '../dist'),
    publicPath: '/', // specify the base path for all the assets
    filename: '[name].[hash].js',
    chunkFilename: '[id].[hash].chunk.js'
  },

  plugins: [
    // Only emit files when there are no errors
    new webpack.NoEmitOnErrorsPlugin(),

    // Minify all javascript, switch loaders to minimizing mode
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: true,
      mangle: false, // MANGLE BREAKS JQUERY
      sourceMap: true
    })
  ]

});
