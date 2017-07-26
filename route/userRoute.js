'use strict'

var express = require('express');
var userController = require('../controller/userController');
var api = express.Router();

api.get('/all', userController.getAll);
api.get('/:id', userController.getById);
api.post('/save', userController.save);
api.put('/update/:id', userController.update);
api.delete('/delete/:id', userController.deleteById);

module.exports = api;