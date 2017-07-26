'use strict'

var express = require('express');
var expertiseController = require('../controller/expertiseController');
var api = express.Router();

api.get('/all', expertiseController.getAll);
api.get('/:id', expertiseController.getById);
api.post('/save', expertiseController.save);
api.put('/update/:id', expertiseController.update);
api.delete('/delete/:id', expertiseController.deleteById);

module.exports = api;