const http = require('http');
const app = require('./app'); //import app.js

app.set('port', process.env.PORT || 3000); //app listens to port
const server = http.createServer(app);

server.listen(process.env.PORT || 3000);