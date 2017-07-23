'use strict'

var express = require('express');
var userController = require('../controller/userController');
var api = express.Router();

api.get('/all', userController.getAllUsers);
api.get('/:id', userController.getUserById);
api.post('/save', userController.saveUser);
api.put('/update/:id', userController.updateUser);
api.delete('/delete/:id', userController.deleteUser);

module.exports = api;