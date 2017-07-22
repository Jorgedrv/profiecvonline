'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var userSchema = schema({
    _id: schema.Types.ObjectId,
    username: String,
    password: String,
    role: {
        roleId: [{type: schema.Types.ObjectId, index: true, unique: true, required: false}]
    },
    email: String,
    email_status: String,
    status: String,
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);