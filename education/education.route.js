'use strict'

var express = require('express');
var controller = require('../education/education.controller');
var education = express.Router();

education.get('/all', controller.getAll);
education.get('/:id', controller.getById);
education.post('/save', controller.save);
education.put('/update/:id', controller.update);
education.delete('/delete/:id', controller.deleteById);

module.exports = education;
