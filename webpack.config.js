'use strict'
// CONSTANTS

const path = require('path')
const webpack = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const project = require('./project.config')
const isProd = project.env === 'production'
const inProject = path.resolve.bind(path, project.basePath)
const inProjectSrc = (file) => inProject(project.srcDir, file)

let config = {
  entry: {
    vendor: [
      inProjectSrc('polyfills'),
      inProjectSrc('vendor')
    ],
    app: [
      inProjectSrc('main')
    ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    noInfo: true,
    hot: true,
    inline: true,
    historyApiFallback: true,
    stats: 'minimal'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?.*$|$)/,
        loader: 'file-loader'
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: [
          /(node_modules)/,
          /(dist)/
        ]
      },
      {
        test: /\.pug$/,
        loader: 'pug-html-loader'
      },
      {
        test: /\.css$/,
        loader: 'css-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'raw-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.ts$/,
        use: [
          'awesome-typescript-loader',
          'angular2-template-loader',
          '@angularclass/hmr-loader',
          'angular2-router-loader'
        ]
      }
    ]
  },
  // PLUGINS
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),

    new webpack.ProvidePlugin({
      Hammer: 'hammerjs/hammer',
      jQuery: 'jquery',
      $: 'jquery',
      jquery: 'jquery'
    }),

    new webpack.ContextReplacementPlugin(
      /angular(\\|\/)core(\\|\/)esm5/,
      path.resolve(__dirname, './client')
    ),

    // ADD VENDOR MODULES TO SEPARATE FILE
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'commons.js'
    }),

    // Copy assets from the public folder
    new CopyWebpackPlugin([
      {
        from: './public'
      },
      {
        from: './node_modules/font-awesome/fonts',
        to: 'fonts'
      }
    ]),

    // CREATE INDEX FILE
    new HtmlWebpackPlugin({
      filetype: 'pug',
      template: inProjectSrc('index.pug')
    })
  ],
  resolve: {
    extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html', '.pug', '.map']
  }
}

// ENV SPECIFIC SETTINGS
if (isProd) {
  console.log('SERVING PRODUCTION BUILD')
  config.devtool = 'cheap-module-source-map'
  config.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compress: true,
      mangle: false,
      sourceMap: true
    })
  )
} else {
  console.log('SERVING DEVELOPMENT BUILD ')
  config.devtool = 'inline-source-map'
  config.plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  )
}

module.exports = config
