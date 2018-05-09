const controller = require('./../controllers/controllers');

module.exports = function(app){
    app.get('/', controller.index); // Shows All People
    app.get('/new/:name', controller.new); // Add One People
    app.get('/remove/:name', controller.remove); // Remove One People
    app.get('/:name', controller.name); // Show One People
}