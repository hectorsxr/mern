'use strict';

const mongoose = require('mongoose');

mongoose.set('debug', true);
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/mern');

module.exports.User = require('./user');
module.exports.Poll = require('./poll');