const controller = require('./../controllers/controllers');

module.exports = function(app){
    // app.get('/', controller.index); //Homepage
    app.get('/tasks', controller.all); // Shows All Tasks
    app.get('/tasks/:id', controller.task); // Shows A Specific Task
    app.post('/tasks', controller.new_task); // Create A New Task
    app.put('/tasks/:id', controller.update); // Update A Specific Task
    app.delete('/tasks/:id', controller.del_task); // Delete A Specific Task
}