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
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {
        noInfo: true,
        hot: true,
        inline: true,
        historyApiFallback: true
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
        new CopyWebpackPlugin([
            {
                from: './public'
            },
            {
                from: "./node_modules/font-awesome/fonts",
                to: "fonts"
            }
        ]),

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
