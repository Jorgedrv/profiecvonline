'use strict'

var express = require('express');
var roleController = require('../controller/roleController');
var api = express.Router();

api.get('/all', roleController.getAll);
api.get('/:id', roleController.getById);
api.post('/save', roleController.save);
api.put('/update/:id', roleController.update);
api.delete('/delete/:id', roleController.deleteById);

module.exports = api;