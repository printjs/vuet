import * as Fastify from "fastify";
import * as render from "vue-server-renderer";

const fastify = Fastify();
const renderer = render.createRenderer();

const template = require("fs").readFileSync("./template.html", "utf-8");
const serverBundle = require("./dist/vue-ssr-server-bundle.json");
const clientManifest = require("./dist/vue-ssr-client-manifest.json");

const app = render.createBundleRenderer(serverBundle, {
    template,
    clientManifest
    // ……renderer 的其他选项
});
fastify.route({
    method: "GET",
    url: "/",
    handler(req, reply) {
        renderer.renderToString(app, (err: any, html: any) => {
            if (err) throw err;
            reply
                .code(200)
                .header("Content-Type", "text/html")
                .send();
        });
    }
});


fastify.listen(8080);