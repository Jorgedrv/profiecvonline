'use strict'

var express = require('express');
var controller = require('../about/about.controller');
var about = express.Router();

about.get('/all', controller.getAll);
about.get('/:id', controller.getById);
about.post('/save', controller.save);
about.put('/update/:id', controller.update);
about.delete('/delete/:id', controller.deleteById);

module.exports = about;
