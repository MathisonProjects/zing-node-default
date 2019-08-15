#!/usr/bin/env nodejs
var https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('/etc/apache2/ssl/website_ssl.key'),
  cert: fs.readFileSync('/etc/apache2/ssl/cloudflare/cloudflare.subdomain.zing.land.pem')
};

https.createServer(options, (request, response) => {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World! Node.js is working correctly.\n');
}).listen(4000);

console.log('Server running at https://127.0.0.1:4000/');