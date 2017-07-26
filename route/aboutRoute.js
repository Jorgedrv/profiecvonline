'use strict'

var express = require('express');
var aboutController = require('../controller/aboutController');
var api = express.Router();

api.get('/all', aboutController.getAll);
api.get('/:id', aboutController.getById);
api.post('/save', aboutController.save);
api.put('/update/:id', aboutController.update);
api.delete('/delete/:id', aboutController.deleteById);

module.exports = api;