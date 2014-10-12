var Hapi = require('hapi');

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000);
var routes = require('./server/routes.js')(server);

// Start the server
console.log("Server started: ");
server.start();