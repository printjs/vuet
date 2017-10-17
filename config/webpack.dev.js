const merge = require('webpack-merge');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');

const base = require('./webpack.base');


module.exports = function(env){
     return merge.smart(base(env),{     
        module:{
            rules:[
                {
                    test: /\.scss$/,
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
                        },
                        {
                            loader: 'sass-loader'
                        }
                    ],
                },
            ]
        }
    })
}