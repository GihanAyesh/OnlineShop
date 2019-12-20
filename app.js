const http = require('http');
const router = require('./routes.js');

const server = http.createServer (router.handler);

server.listen(3000);