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
    date_in: {type: Date, require: true, default: Date.now },
    date_out: {type: Date, require: true, default: Date.now },
    user: {
        userId: {type: schema.Types.ObjectId, index: true, unique: true, required: false}
    }
});

module.exports = mongoose.model('Experience', experienceSchema);