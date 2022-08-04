// used for routing
var express = require('express');
var app = express();
// provide http functionality
var http = require('http').Server(app);

app.use(express.static(_dirname + '/www'));

http.listen(3000);