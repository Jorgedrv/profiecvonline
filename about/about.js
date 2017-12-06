'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var aboutSchema = schema({
    introduction: String,
    review: String,
    skill: String,
    profile: String,
    user: {
        userId: {type: schema.Types.ObjectId, index: true, unique: true, required: false}
    }
});

module.exports = mongoose.model('About', aboutSchema);
