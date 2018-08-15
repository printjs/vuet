import webpack from "webpack";
const CleanWebpackPlugin = require("clean-webpack-plugin");

import config from "./webpack.config";

const prod: webpack.Configuration = (<any>Object).assign({}, config, {
    mode: process.env.NODE_ENV,
    plugins: [
        new CleanWebpackPlugin([
            "dist",
        ], {
                root: __dirname,
                verbose: false,
                watch: true
            }),
        new webpack.optimize.UglifyJsPlugin({
            sourceMap: false,
            compress: {
                warnings: false
            }
        }),
        new webpack.LoaderOptionsPlugin({
            minimize: true
        })
    ]
});


export default prod;
