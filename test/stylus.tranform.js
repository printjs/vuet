const stylus = require("stylus");


// stylus.tranform.js
module.exports = {
    process(src, filename, config, options) {
        let cssval = "";
        stylus(src)
            .render(function (err, css) {
                cssval = css;
                console.log(css);
            });
        return "module.exports = " + JSON.stringify(cssval) + ";";
    },
}