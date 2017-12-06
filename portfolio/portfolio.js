'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var portfolioSchema = schema({
    type: String,
    title: String,
    review: String,
    introduction: String,
    user: {
        userId: {type: schema.Types.ObjectId, index: true, unique: true, required: false}
    }
});

module.exports = mongoose.model('Portfolio', portfolioSchema);
