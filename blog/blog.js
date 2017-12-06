'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var blogSchema = schema({
    title: String,
    description: String,
    review: String,
    icon: String,
    user: {
        userId: {type: schema.Types.ObjectId, index: true, unique: true, required: false}
    }
});

module.exports = mongoose.model('Blog', blogSchema);
