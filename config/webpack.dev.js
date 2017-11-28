const merge = require('webpack-merge');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const base = require('./webpack.base');


module.exports = function (env) {
    return merge.smart(base(env), {
        module: {
            rules: [
                {
                    test: /\.styl$/,
                    use: [{
                            loader: 'style-loader'
                        }, {
                            loader: 'css-loader'
                        }, {
                            loader: 'postcss-loader',
                            options: {
                                sourceMap: true,
                                plugins: () => [autoprefixer]
                            }
                        },
                        {
                            loader: 'stylus-loader',
                        }
                    ]
                },
                // {
                //     test: /\.scss$/,
                //     use: [{
                //             loader: 'style-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
                //         },
                //         {
                //             loader: 'css-loader?modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]'
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
                {
                    test: /\.css$/,
                    use: [{
                            loader: 'style-loader'
                        },
                        {
                            loader: 'css-loader'
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                plugins: () => [autoprefixer]
                            }
                        }
                    ],
                }
            ]
        }
    })
}