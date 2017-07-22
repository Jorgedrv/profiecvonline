'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var roleSchema = schema({
    description: String,
    code: String,
    status: String,
});

module.exports = mongoose.model('Role', roleSchema);