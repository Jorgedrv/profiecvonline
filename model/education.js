'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var educationSchema = schema({
    title: String,
    entity: String,
    review: String,
    date_in: {type: Date, require: true},
    date_out: {type: Date, require: true}
});

module.exports = mongoose.model('Education', educationSchema);