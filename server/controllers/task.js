var Task = require('../models/task.js');

var tep = new Task('Hapi', 'None', 2, 'Never');

module.exports = {
    create: function() {
        return Task.create();

    },
    remove: function() {
        return Task.remove();
    },
    get: function() {
        return tep.get();
    },
    update: function() {
        return Task.update();
    }
};
