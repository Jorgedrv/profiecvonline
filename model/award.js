'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var awardSchema = schema({
    title: String,
    subtitle: String,
    review: String,
    icon: String
});

module.exports = mongoose.model('Award', awardSchema);