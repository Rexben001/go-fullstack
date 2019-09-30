const http = require('http');

const server = http.createServer((req, res)=>{
    res.end('server created successfuly!');
});

server.listen(process.env.PORT || 3000);