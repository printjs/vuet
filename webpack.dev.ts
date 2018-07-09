import config from "webpack.config";
import webpack from "webpack";


const dev: webpack.Configuration = (<any>Object).assign({}, config, {
    mode: process.env.NODE_ENV,
    devtool: "cheap-module-eval-source-map",
    devServer: {
        noInfo: false,
        proxy: {
            "/intelligence": {
                target: "http://10.4.5.134",
                changeOrigin: true,
                secure: false
            }
        },
        open: true,
    }
});

export default dev;
