'use strict'

var express = require('express');
var blogController = require('../controller/blogController');
var api = express.Router();

api.get('/all', blogController.getAll);
api.get('/:id', blogController.getById);
api.post('/save', blogController.save);
api.put('/update/:id', blogController.update);
api.delete('/delete/:id', blogController.deleteById);

module.exports = api;