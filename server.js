const http = require('http');
const app = require('./app')

const port = process.env.PORT || 7000;
console.log('port:7000')
// console.log('app',app)

const server = http.createServer(app);
// console.log('server',server)
server.listen(port);