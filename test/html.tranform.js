const htmlloader = require("html-loader");


// stylus.tranform.js
module.exports = {
    process(src, filename, config, options) {
        return htmlloader(src);
    },
}