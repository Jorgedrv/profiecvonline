'use strict'

var express = require('express');
var controller = require('../expertise/expertise.controller');
var expertise = express.Router();

expertise.get('/all', controller.getAll);
expertise.get('/:id', controller.getById);
expertise.post('/save', controller.save);
expertise.put('/update/:id', controller.update);
expertise.delete('/delete/:id', controller.deleteById);

module.exports = expertise;
