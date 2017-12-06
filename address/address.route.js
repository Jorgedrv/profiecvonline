'use strict'

var express = require('express');
var controller = require('../address/address.controller');
var address = express.Router();

address.get('/all', controller.getAll);
address.get('/:id', controller.getById);
address.post('/save', controller.save);
address.put('/update/:id', controller.update);
address.delete('/delete/:id', controller.deleteById);

module.exports = address;
