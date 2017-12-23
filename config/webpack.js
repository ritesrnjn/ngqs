'use strict';
// CONSTANTS
const ENV = process.env.NODE_ENV,
    isProd = ENV == 'production',
    path = require('path'),
    webpack = require('webpack'),
    CopyWebpackPlugin = require('copy-webpack-plugin'),
    HtmlWebpackPlugin = require('html-webpack-plugin');

var config = {
    entry: {
        vendor: [
            './client/polyfills.ts',
            './client/vendor.ts'
        ],
        app: [
            './client/main.ts'
        ]
    },
    context: path.join(__dirname, '..'),
    devServer: {
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true
    },
    // LOADERS
    module: {
        rules: [{ // ASSETS
            test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
            use: [{
                loader: 'file-loader?name=fonts/[name].[hash].[ext]?'
            }]
        }, { // HTML
            test: /\.html$/,
            use: [{
                loader: 'html-loader'
            }]
        }, {
            // JS
            test: /\.js$/,
            use: [{
                loader: 'babel',
            }],
            exclude: [
                path.resolve(__dirname, '../node_modules'),
                path.resolve(__dirname, '../_dist')
            ]
        }, { // PUG
            test: /\.pug$/,
            use: [{
                loader: 'pug-html-loader'
            }]
        }, { // CSS
            test: /\.css$/,
            use: [{
                loader: 'css-loader'
            }]
        }, { // SCSS
            test: /\.scss$/,
            use: [{
                loader: "raw-loader"
            }, {
                loader: "sass-loader",
                options: {
                    sourceMap: true
                }
            }]
        }, { // TS
            test: /\.ts$/,
            use: [
                'awesome-typescript-loader',
                'angular2-template-loader',
                '@angularclass/hmr-loader',
                'angular2-router-loader'
            ]
        }]
    },
    // OUTPUT FILE
    output: {
        path: path.resolve(__dirname, '../_dist'),
        filename: 'bundle.js'
    },
    // PLUGINS
    plugins: [
        new webpack.optimize.OccurrenceOrderPlugin(),

        new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': ENV
            }
        }),
        new webpack.ProvidePlugin({
            Hammer: 'hammerjs/hammer',
            jQuery: 'jquery',
            $: 'jquery',
            jquery: 'jquery'
        }),

        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            __dirname
        ),


        // ADD VENDOR MODULES TO SEPARATE FILE
        new webpack.optimize.CommonsChunkPlugin({
            name: "vendor",
            minChunks: Infinity,
            filename: "commons.js"
        }),

        // Copy assets from the public folder
        new CopyWebpackPlugin([{
            from: './public'
        }]),

        // CREATE INDEX FILE
        new HtmlWebpackPlugin({
            filetype: 'pug',
            template: 'index.pug'
        })
    ],
    resolve: {
        extensions: ['.ts', '.js', '.json', '.css', '.scss', '.html', '.pug', 'map']
    }
};

// ENV SPECIFIC SETTINGS
if (isProd) {
    console.log('SERVING PRODUCTION BUILD');
    config.devtool = 'cheap-module-source-map';
    config.plugins.push(

        new webpack.optimize.UglifyJsPlugin({
            comments: false,
            compress: true,
            mangle: false,
            sourceMap: true
        })
    );
} else {
    console.log('SERVING DEVELOPMENT BUILD ');
    config.devtool = 'inline-source-map';
    config.plugins.push(
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
    );

}

module.exports = config;
