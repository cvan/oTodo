function Task(task, category, priority, endDate) {
    this.task = task || 'New Task';
    this.category = category || 'General';
    this.priority = priority || 1;
    this.endDate = endDate || 'No End Date';
    this.isDone = false;
}

var t = new Task('Create a restful API', 'Hax', 10, 'Today');

Task.prototype.constructor = function() {

};

Task.prototype.create = function() {
    console.log("Task created!");
};

Task.prototype.remove = function() {
    console.log("Task deleted!");
};

Task.prototype.get = function() {
    return t;
};

Task.prototype.update = function() {
    console.log("Task updated!");
};



module.exports = Task;