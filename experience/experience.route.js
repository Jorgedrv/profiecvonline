'use strict'

var express = require('express');
var controller = require('../experience/experience.controller');
var experience = express.Router();

experience.get('/all', controller.getAll);
experience.get('/:id', controller.getById);
experience.post('/save', controller.save);
experience.put('/update/:id', controller.update);
experience.delete('/delete/:id', controller.deleteById);

module.exports = experience;
