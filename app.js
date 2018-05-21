const http = require('http');
const os = require('os');

console.log('Kubia server starting...');

var www = http.createServer(function(request, response) {
  console.log('Received request from ' + request.connection.remoteAddress);
  response.writeHead(200);
  response.end('This is V1 running in Pod ' + os.hostname() + "\n");
});

www.listen(8080);
