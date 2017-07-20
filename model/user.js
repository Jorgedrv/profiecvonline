'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var userSchema = schema({
    username: String,
    password: String,
    role: String,
    email: String,
    status: String
});

module.exports = mongoose.model('User', userSchema);