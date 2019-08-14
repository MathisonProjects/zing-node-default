var express = require("express");
var fs = require ('fs');
var app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
var port = 3001;
var http = require('http').Server(app);

var io = require('socket.io')(http);


io.on('connection', function(socket){

});

http.listen(port, function(){
  console.log('listening on *:'+port);
});