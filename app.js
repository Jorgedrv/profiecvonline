'user strict'

var express = require('express');
var bodyparser = require('body-parser');

var app = express();
var aboutApi = require('./route/aboutRoute');
var addressApi = require('./route/addressRoute');
var awardApi = require('./route/awardRoute');
var blogApi = require('./route/blogRoute');
var educationApi = require('./route/educationRoute');
var experienceApi = require('./route/experienceRoute');
var portfolioApi = require('./route/portfolioRoute');
var roleApi = require('./route/roleRoute');
var skillApi = require('./route/skillRoute');
var userApi = require('./route/userRoute');

app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

app.use('/cvonline/about', aboutApi);
app.use('/cvonline/address', addressApi);
app.use('/cvonline/award', awardApi);
app.use('/cvonline/blog', blogApi);
app.use('/cvonline/education', educationApi);
app.use('/cvonline/experience', experienceApi);
app.use('/expertise', expertiseApi);
app.use('/portfolio', portfolioApi);
app.use('/cvonline/role', roleApi);
app.use('/cvonline/skill', skillApi);
app.use('/cvonline/user', userApi);

module.exports = app;