'use strict'

var express = require('express');
var controller = require('../role/role.controller');
var role = express.Router();

role.get('/all', controller.getAll);
role.get('/:id', controller.getById);
role.post('/save', controller.save);
role.put('/update/:id', controller.update);
role.delete('/delete/:id', controller.deleteById);

module.exports = role;
