'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var skillSchema = schema({
    description: String,
    code: String,
    knowledge: String,
    user: {
        userId: {type: schema.Types.ObjectId, index: true, unique: true, required: false}
    }
});

module.exports = mongoose.model('Skill', skillSchema);
