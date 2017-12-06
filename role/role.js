'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var roleSchema = schema({
    description: {type: String, required: true},
    code: {type: String, required: true},
    status: {type: Boolean, default: false},
});

module.exports = mongoose.model('Role', roleSchema);
