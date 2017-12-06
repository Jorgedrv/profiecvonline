'use strict'

var express = require('express');
var controller = require('../user/user.controller');
var user = express.Router();

user.get('/all', controller.getAll);
user.get('/:id', controller.getById);
user.post('/save', controller.save);
user.put('/update/:id', controller.update);
user.delete('/delete/:id', controller.deleteById);

module.exports = user;
