'user strict'

var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var userApi = require('./route/userRoute');
var roleApi = require('./route/roleRoute');
var educationApi = require('./route/educationRoute');
var experienceApi = require('./route/experienceRoute');
var blogApi = require('./route/blogRoute');
var awardApi = require('./route/awardRoute');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/cvonline/user', userApi);
app.use('/cvonline/role', roleApi);
app.use('/cvonline/education', educationApi);
app.use('/cvonline/experience', experienceApi);
app.use('/cvonline/blog', blogApi);
app.use('/cvonline/award', awardApi);

module.exports = app;