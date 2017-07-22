'use strict'

var express = require('express');
var userController = require('../controller/userController');
var api = express.Router();

api.get('/all', userController.getUsers);
api.get('/:id', userController.getUser);
api.post('/save', userController.saveUser);
api.put('/update/:id', userController.updateUser);
api.delete('/delete/:id', userController.deleteUser);

module.exports = api;