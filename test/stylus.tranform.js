const stylus = require("stylus");
const stylusloader = require("stylus-loader");


// stylus.tranform.js
module.exports = {
    process(src, filename, config, options) {
        let cssval = "";
        stylus(src)
            // .set("filename", "./test.css")
            .render(function (err, css) {
                cssval = css;
                console.log(css);
            });
        console.log(stylusloader(src));
        return "module.exports = " + JSON.stringify(cssval) + ";";

        // return stylusloader(src);
        // console.log(src);
        // console.log(filename);
        // console.log(config);
        // console.log(options);

    },
}