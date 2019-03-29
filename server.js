const http = require('http');
const app = require('./app')

const port = process.env.PORT || 4000;
console.log('port',port)

const server = http.createServer(app);
// console.log('server',server)
server.listen(port);