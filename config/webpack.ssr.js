const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');


module.exports = function (env) {
    return {
        output: {
            path: path.resolve(__dirname, '../build'),
            filename: '[name].[hash].js',
        },
        resolve: {
            extensions: ['.ts', '.js', '.vue', '.scss', '.json'],
            alias: {
                'src': path.resolve(__dirname, '../src'),
                'vue$': 'vue/dist/vue.esm.js',
                '@views': 'src/views/',
                '@components': 'src/components/'
            }
        },
        devtool: '#source-map',
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
                    loader: 'ts-loader',
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
                            'styl': 'vue-style-loader!css-loader!stylus-loader',
                        }
                    }
                },
                {
                    test: /\.html$/,
                    loader: 'raw-loader',
                    exclude: [path.resolve(__dirname, '../index.html')]
                },
                {
                    test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                    loader: 'url-loader?limit=8192&name=[path][name].[ext]'
                },
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
        },
        plugins: [
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env)
                }
            }),
        ]
    }
}