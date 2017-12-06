'use strict'

var express = require('express');
var controller = require('../blog/blog.controller');
var blog = express.Router();

blog.get('/all', controller.getAll);
blog.get('/:id', controller.getById);
blog.post('/save', controller.save);
blog.put('/update/:id', controller.update);
blog.delete('/delete/:id', controller.deleteById);

module.exports = blog;
