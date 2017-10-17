const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const autoprefixer = require('autoprefixer');
console.log("process.env.NODE_ENV", process.env.NODE_ENV);

const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
    entry: './src/main.ts',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'build.[hash].js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.vue', '.scss', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
        }
    },
    module: {
        rules: [{
                test: /\.ts$/,
                exclude: /node_modules/,
                enforce: 'pre',
                loader: 'tslint-loader'
            },
            {
                test: /\.ts$/,
                exclude: /node_modules|vue\/src/,
                loader: 'awesome-typescript-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/]
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    esModule: true,
                    loaders: {
                        // Since sass-loader (weirdly) has SCSS as its default parse mode, we map
                        // the "scss" and "sass" values for the lang attribute to the right configs here.
                        // other preprocessors should work out of the box, no loader config like this necessary.
                        'scss': 'vue-style-loader!css-loader!sass-loader',
                        'sass': 'vue-style-loader!css-loader!sass-loader?indentedSyntax'
                    }
                }
            },
            {
                test: /\.scss$/,
                use: extractSass.extract({
                    use: [{
                            loader: "css-loader",
                            options: {
                                minimize: true,
                                sourceMap: true,
                                importLoaders: 2
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
                    // 在开发环境使用 style-loader
                    fallback: "style-loader"
                })
            }
            // {
            //     test: /\.scss$/,
            //     use: [
            //         {
            //             loader: 'style-loader'
            //         },
            //         {
            //             loader: 'css-loader'
            //         },
            //         {
            //             loader: 'postcss-loader',
            //             options: {
            //                 plugins: () => [autoprefixer]
            //             }
            //         },
            //         {
            //             loader: 'sass-loader'
            //         }
            //     ],
            // },
        ]
    },
    devServer: {
        historyApiFallback: true,
        noInfo: true,
        proxy: {
            "/intelligence": {
                target: "http://10.4.5.134",
                changeOrigin: true,
                secure: false
            }
        }
    },
    devtool: 'cheap-module-eval-source-map',
    plugins: [
        // new webpack.ProvidePlugin({
        //     $: 'jquery',
        //     jQuery: 'jquery',
        //     Popper: ['popper.js', 'default'],
        //     bootstrap: 'bootstrap/dist/js/bootstrap.js'
        // }),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.join(__dirname, 'index.html'),
            chunksSortMode: 'dependency',
        })
    ]
}

if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map'
    // http://vue-loader.vuejs.org/en/workflow/production.html
    module.exports.plugins = (module.exports.plugins || []).concat([
        new CleanWebpackPlugin([
            'dist',
        ], {
            root: __dirname,
            verbose: true,
        }),
        extractSass,
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
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: true,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ])
}