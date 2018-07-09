import webpack from "webpack";
const HtmlWebpackPlugin = require("html-webpack-plugin");
import { join } from "path";
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const autoprefixer = require("autoprefixer");


const config: webpack.Configuration = {
    entry: "./src/main.ts",
    output: {
        path: join(__dirname, "dist"),
        filename: "[name].[hash].js",
    },
    resolve: {
        extensions: [".ts", ".js", ".vue", ".styl", ".json"],
        alias: {
            "src": join(__dirname, "src"),
            "vue$": "vue/dist/vue.esm.js",
            "@views": "src/views/",
            "@components": "src/components/",
            "@utils": "src/utils/"
        }
    },
    module: {
        rules: [{
            test: /\.ts$/,
            exclude: /node_modules/,
            enforce: "pre",
            loader: "tslint-loader"
        },
        {
            test: /\.ts$/,
            exclude: /node_modules|vue\/src/,
            loader: "ts-loader",
            options: {
                appendTsSuffixTo: [/\.vue$/]
            }
        },
        {
            test: /\.vue$/,
            loader: "vue-loader",
            options: {
                esModule: true,
                loaders: {
                    "styl": "vue-style-loader!css-loader!stylus-loader",
                }
            }
        },
        {
            test: /\.html$/,
            loader: "raw-loader",
            exclude: [join(__dirname, "index.html")]
        },
        {
            test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
            loader: "url-loader?limit=8192&name=[path][name].[ext]"
        },
        {
            test: /\.styl$/,
            use: [process.env.NODE_ENV === "development" ? {
                loader: "style-loader"
            } : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader"
            }, {
                loader: "postcss-loader",
                options: {
                    sourceMap: true,
                    plugins: () => [autoprefixer]
                }
            },
            {
                loader: "stylus-loader",
            }]
        },
        {
            test: /\.css$/,
            use: [process.env.NODE_ENV === "development" ? {
                loader: "style-loader"
            } : MiniCssExtractPlugin.loader,
            {
                loader: "css-loader"
            },
            {
                loader: "postcss-loader",
                options: {
                    plugins: () => [autoprefixer]
                }
            }
            ],
        },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: "index.html",
            template: join(__dirname, "index.html"),
            chunksSortMode: "dependency",
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV)
            }
        }),
        new MiniCssExtractPlugin({
            // Options similar to the same options in webpackOptions.output
            // both options are optional
            filename: process.env.NODE_ENV === "development" ? "[name].css" : "[name].[hash].css",
            chunkFilename: process.env.NODE_ENV === "development" ? "[id].css" : "[id].[hash].css",
        }),
    ]
};

export default config;
