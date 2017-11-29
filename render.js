const {
    createBundleRenderer
} = require('vue-server-renderer')
const renderer = require('vue-server-renderer').createRenderer()

const fastify = require('fastify')();

const template = require('fs').readFileSync('./template.html', 'utf-8');
const serverBundle = require('./dist/vue-ssr-server-bundle.json');
const clientManifest = require('./dist/vue-ssr-client-manifest.json');

const app = createBundleRenderer(serverBundle, {
    template,
    clientManifest
    // ……renderer 的其他选项
});

console.dir(template)
fastify.route({
    method: 'GET',
    url: '/',
    handler(req, reply) {
        renderer.renderToString(app, (err, html) => {
            console.log(html);
            if (err) throw err;
            reply
                .code(200)
                .header('Content-Type', 'text/html')
                .send(html);
        });
    }
});



fastify.listen(3000, err => {
    if (err) throw err
    console.log(`server listening on ${fastify.server.address().port}`)
})