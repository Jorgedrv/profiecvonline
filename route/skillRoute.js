'use strict'

var express = require('express');
var skillController = require('../controller/skillController');
var api = express.Router();

api.get('/all', skillController.getAll);
api.get('/:id', skillController.getById);
api.post('/save', skillController.save);
api.put('/update/:id', skillController.update);
api.delete('/delete/:id', skillController.deleteById);

module.exports = api;