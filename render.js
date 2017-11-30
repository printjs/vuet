const {
    createBundleRenderer
} = require('vue-server-renderer')
// const renderer = require('vue-server-renderer').createRenderer()

const fastify = require('fastify')();

const template = require('fs').readFileSync('./template.html', 'utf-8');
const serverBundle = require('./build/vue-ssr-server-bundle.json');
const clientManifest = require('./build/vue-ssr-client-manifest.json');

const render = createBundleRenderer(serverBundle, {
    runInNewContext: false, // 推荐
    template,
    clientManifest
    // ……renderer 的其他选项
});


fastify.route({
    method: 'GET',
    url: '/',
    handler(req, reply) {
        render.renderToString((err, html) => {
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