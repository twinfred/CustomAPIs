const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/1989_api');
require('./../models/people');