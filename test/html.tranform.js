const htmlloader = require("html-loader");


// stylus.tranform.js
module.exports = {
    process(src, filename, config, options) {
        console.log(htmlloader(src));
        return htmlloader(src);
    },
}