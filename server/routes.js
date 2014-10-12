var taskController = require('./controllers/task.js');

module.exports = function(server) {
    // Add the route
    server.route({
        method: 'GET',
        path: '/get',
        handler: function (request, reply) {
            reply(taskController.get());
        }
    });
};