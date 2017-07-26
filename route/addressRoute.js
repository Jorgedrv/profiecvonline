'use strict'

var express = require('express');
var addressController = require('../controller/addressController');
var api = express.Router();

api.get('/all', addressController.getAll);
api.get('/:id', addressController.getById);
api.post('/save', addressController.save);
api.put('/update/:id', addressController.update);
api.delete('/delete/:id', addressController.deleteById);

module.exports = api;