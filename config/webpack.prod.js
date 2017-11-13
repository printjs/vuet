const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const merge = require('webpack-merge');
const autoprefixer = require('autoprefixer');

const base = require('./webpack.base');

const extractSass = new ExtractTextPlugin({
    allChunks: true,
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});
const extractCss = new ExtractTextPlugin({
    allChunks: true,
    filename: "css.[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = function (env) {
    return merge.strategy({
        plugins: 'prepend',
        entry: 'replace',
    })(base(env), {
        entry: {
            entry: './src/main.ts',
            vendor: ['vue', 'element-ui']
        },
        module: {
            rules: [{
                    test: /\.scss$/,
                    use: extractSass.extract({
                        use: [{
                                loader: "css-loader",
                                options: {
                                    minimize: true,
                                    sourceMap: true,
                                    module: true,
                                    localIdentName: "[name]__[local]___[hash:base64:5]",
                                }
                            },
                            {
                                loader: "sass-loader",
                                options: {
                                    outputStyle: 'expanded',
                                    sourceMap: true,
                                    sourceMapContents: true
                                }
                            }
                        ],
                    })
                },
                {
                    test: /\.css$/,
                    use: extractSass.extract({
                        use: [{
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: true,
                            }
                        }],
                    })
                }
            ]
        },
        plugins: [
            new CleanWebpackPlugin([
                'dist',
            ], {
                root: path.resolve(__dirname, '../'),
                verbose: false,
                watch: true
            }),
            extractSass,
            extractCss,
            // new CopyWebpackPlugin([{
            //         from: './src/assets/ip.svg',
            //         to: './src/assets/ip.svg'
            //     },
            //     {
            //         from: './src/assets/domain.svg',
            //         to: './src/assets/domain.svg'
            //     },
            //     {
            //         from: './src/assets/sample.svg',
            //         to: './src/assets/sample.svg'
            //     },
            //     {
            //         from: './src/assets/whoisemail.svg',
            //         to: './src/assets/whoisemail.svg'
            //     },
            //     {
            //         from: './src/assets/whoisname.svg',
            //         to: './src/assets/whoisname.svg'
            //     },
            // ]),
            new webpack.optimize.UglifyJsPlugin({
                sourceMap: false,
                compress: {
                    warnings: false
                }
            }),
            new webpack.LoaderOptionsPlugin({
                minimize: true
            }),
            new webpack.optimize.CommonsChunkPlugin({
                name: 'vendor',
                filename: 'vendor.bundle.js'
            })
        ]
    })
}