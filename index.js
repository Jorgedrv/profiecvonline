'user scrict'

var app = require('./app');

var port = process.env.PORT || 3678;

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/user', (err, res) => {
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
    