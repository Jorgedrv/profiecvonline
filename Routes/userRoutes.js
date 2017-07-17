'use strict'

var express = require('express');
var userController = require('../Controllers/userController');
var api = express.Router();

api.get('/users', userController.getUsers);
api.get('/user/:id', userController.getUser);
api.post('/save', userController.saveUser);
api.put('/update/:id', userController.updateUser);
api.delete('/delete/:id', userController.deleteUser);

module.exports = api;