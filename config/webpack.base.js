const webpack = require('webpack');
const path = require('path');

const HtmlWebpackPlugin = require('html-webpack-plugin');


console.log("process.env.NODE_ENV", process.env.NODE_ENV, "base");

module.exports = function (env) {
    return {
        entry: './src/entry-client.ts',
        output: {
            path: path.resolve(__dirname, '../dist'),
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
                            'styl': 'vue-style-loader!css-loader!stylus -loader',
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
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: path.resolve(__dirname, '../index.html'),
                chunksSortMode: 'dependency',
            }),
            new webpack.DefinePlugin({
                'process.env': {
                    NODE_ENV: JSON.stringify(env)
                }
            }),
        ]
    }
}