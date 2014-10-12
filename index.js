var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);
var routes = require('./server/routes.js')(server);

// Start the server
server.start(function() {
    console.log('Server started on ' + server.info.uri + ':' + server.info.port);
});