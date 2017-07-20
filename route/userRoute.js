'use strict'

var express = require('express');
var userController = require('../controller/userController');
var api = express.Router();

api.get('/users', userController.getUsers);
api.get('/user/:id', userController.getUser);
api.post('/save', userController.saveUser);
api.put('/update/:id', userController.updateUser);
api.delete('/delete/:id', userController.deleteUser);
api.get('/users2', userController.getUsers);

module.exports = api;