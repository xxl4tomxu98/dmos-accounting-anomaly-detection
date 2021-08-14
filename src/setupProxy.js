// eslint-disable-next-line @typescript-eslint/no-var-requires
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function (app) {
  app.use(
    '/dmos',
    createProxyMiddleware({
      target: 'http://localhost:8080/',
      changeOrigin: true,
    }),
  );
};
