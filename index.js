var Hapi = require('hapi');
var Ineter = require('ineter');

var ineter = new Ineter();

// Create a server with a host and port
var server = new Hapi.Server();
server.connection({
  host: 'localhost',
  port: process.env.PORT || 5000
});

// Add the route
server.route({
  method: 'GET',
  path:'/',
  handler: function(request, reply) {
    ineter.earthquakes(function(response) {
      reply(JSON.stringify(response, null, 2));
    });
  }
});

// Start the server
server.start();
