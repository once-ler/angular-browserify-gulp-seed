'use strict';

var config  = require('./gulp/config');
var express = require('express');
var morgan  = require('morgan');

var server = express();

// log all requests to the console
server.use(morgan('dev'));
//__dirname + '/../../' + 
server.use(express.static('public'));

// Serve index.html for all routes to leave routing up to Angular
/*
server.all('/*', function(req, res) {
    res.sendFile('index.html', { root: config.dist.root });
});
*/
// Start webserver
server.listen(config.serverport);
server.on('listening', function() {
  console.log('Express server started on port %s at %s', server.address().port, server.address().address);
});