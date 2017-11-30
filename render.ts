import * as Fastify from "fastify";
import * as render from "vue-server-renderer";

const fastify = Fastify();

const template = require("fs").readFileSync("./template.html", "utf-8");
const serverBundle = require("./build/vue-ssr-server-bundle.json");
const clientManifest = require("./build/vue-ssr-client-manifest.json");

const renderer = render.createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template,
    clientManifest
    // ……renderer 的其他选项
});

fastify.route({
    method: "GET",
    url: "/",
    handler(req, reply) {
        renderer.renderToString((err: object, html: string) => {
            if (err) {
                reply.send(err);
                throw err;
            }
            reply
                .code(200)
                .header("Content-Type", "text/html")
                .send(html);
        });
    }
});


fastify.listen(8080);