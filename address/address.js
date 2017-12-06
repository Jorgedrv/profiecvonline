'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var schema = mongoose.Schema;

var addressSchema = schema({
    address_one: String,
    address_two: String,
    zip_code: String,
    country: String,
    user: {
        userId: {type: schema.Types.ObjectId, index: true, unique: true, required: false}
    }
});

module.exports = mongoose.model('Address', addressSchema);
