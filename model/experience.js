'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var experienceSchema = schema({
    title: String,
    enterprise: String,
    testimonial: String,
    review: String,
    icon: String,
    date_in: {type: Date, require: true},
    date_out: {type: Date, require: true}
});

module.exports = mongoose.model('Experience', experienceSchema);