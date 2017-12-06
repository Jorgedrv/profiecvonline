'user scrict'

var app = require('./app');

var mongoose = require('mongoose');
var port = process.env.PORT || 3678;


//mongoose.connect('mongodb_profile/cvHandler', (err, res) => {
mongoose.connect('mongodb://localhost:27017', (err, res) => {
    if (err) {
        throw err;
    }
    else {
        console.log('Connection to Mongo was succesfull');
        app.listen(port, function() {
            console.log(`The API is working fine with http://localhost:${port}`);
        });
    }
});
    