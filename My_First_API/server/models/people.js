const mongoose = require('mongoose');

var peopleSchema = new mongoose.Schema({
    name: {type: String, require: true},
}, {timestamps: true});

module.exports = mongoose.model('peoples', peopleSchema);