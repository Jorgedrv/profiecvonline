'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var userSchema = schema({
    username: String,
    password: String,
    role: {
        roleId: [{type: schema.Types.ObjectId, index: true, unique: true, required: false}]
    },
    email: String,
    email_status: {type:Boolean, default: false},
    status: {type:Boolean, default: false},
    created: { type: Date, default: Date.now },
    updated: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);