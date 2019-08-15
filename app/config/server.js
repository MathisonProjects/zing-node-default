#!/usr/bin/env nodejs
var https = require('https');
const fs = require('fs');
const axios = require('axios');
var io = require('socket.io')(https);

const options = {
  key: fs.readFileSync('/etc/apache2/ssl/website_ssl.key'),
  cert: fs.readFileSync('/etc/apache2/ssl/cloudflare/cloudflare.subdomain.zing.land.pem')
};

https.createServer(options, (request, response) => {
   response.writeHead(200, {'Content-Type': 'text/plain'});
   response.end('Hello World! Node.js is working correctly.\n');
}).listen(4000);

io.on('connection', function(socket){
	// Default Functions
	socket.on('disconnect', function(){
		console.log('Someone disconnected...');
	});

	socket.on('connect', function() {
		console.log('Someone connected...');
	});

	// User Defined Functions
});


function fireEmit(type, content, socket) {
	// Logging Emits
	console.log(type);
	console.log(content);
	// End Logging

	if (type == 'sender-only') { // Responses to user activity
		// socket.emit('chat message', msg, sender);
	} else if (type == 'clients-only') { // User activity
		// socket.broadcast.emit('chat message', "this is a test broadcast");
	} else if (type == 'clients-all') { // Global events
		// io.emit('chat message', "this is a test io");
	} else if (type == 'sender-only-room') {
		// socket.to('game').emit('chat message', 'enjoy the game');
	} else if (type == 'clients-only-room') {
		// socket.broadcast.to('game').emit('chat message', 'nice game');
	} else if (type == 'clients-all-room') {
		// io.in('game').emit('chat message', 'cool game');
	} else if (type == 'sender-only-namespace') {
		// io.of('myNamespace').emit('chat message', 'gg', sender);
	} else if (type == 'clients-only-namespace') { 
		// io.of('myNamespace').broadcast.emit('chat message', 'gg');
	} else if (type == 'clients-all-namespace') { 
		// io.of('myNamespace').emit('chat message', 'gg');
	} else if (type == 'sender-only-namespace-room') { 
		// io.of('myNamespace').to('game').emit('chat message', 'gg', sender);
	} else if (type == 'clients-only-namespace-room') { 
		// io.of('myNamespace').broadcast.to('game').emit('chat message', 'gg', sender);
	} else if (type == 'clients-all-namespace-room') { 
		// io.of('myNamespace').to('game').emit('chat message', 'gg');
	}

	// // sending to all clients in namespace 'myNamespace', include sender
}

function fireApi(endpoint, content) {
	return axios.post(endpoint, content);
}

console.log('Server running at https://127.0.0.1:4000/');