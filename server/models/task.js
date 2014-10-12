function Task(task, category, priority, endDate) {
    this.task = task || 'New Task';
    this.category = category || 'General';
    this.priority = priority || 1;
    this.endDate = endDate || 'No End Date';
    this.isDone = false;
}

module.exports = Task;