'use strict'

var express = require('express');
var educationController = require('../controller/educationController');
var api = express.Router();

api.get('/all', educationController.getAll);
api.get('/:id', educationController.getById);
api.post('/save', educationController.save);
api.put('/update/:id', educationController.update);
api.delete('/delete/:id', educationController.deleteById);

module.exports = api;