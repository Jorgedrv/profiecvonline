'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var blogSchema = schema({
    title: String,
    description: String,
    review: String,
    icon: String
});

module.exports = mongoose.model('Blog', blogSchema);