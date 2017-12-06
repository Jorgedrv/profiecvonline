'use strict'

var express = require('express');
var controller = require('../award/award.controller');
var award = express.Router();

award.get('/all', controller.getAll);
award.get('/:id', controller.getById);
award.post('/save', controller.save);
award.put('/update/:id', controller.update);
award.delete('/delete/:id', controller.deleteById);

module.exports = award;
