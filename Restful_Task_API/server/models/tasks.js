const mongoose = require('mongoose');

var taskSchema = new mongoose.Schema({
    title: {type: String, require: true}, 
    description: {type: String, default: ""},
    completed: {type: Boolean, default: true},
}, {timestamps: true});

module.exports = mongoose.model('tasks', taskSchema);