const htmlloader = require("html-loader");


// stylus.tranform.js
module.exports = {
    process(src, filename, config, options) {
        console.log(htmlloader(src));
        return htmlloader(src);
        // console.log(src);
        // console.log(filename);
        // console.log(config);
        // console.log(options);

    },
}