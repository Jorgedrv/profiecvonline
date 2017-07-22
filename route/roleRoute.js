'use strict'

var express = require('express');
var roleController = require('../controller/roleController');
var api = express.Router();

api.get('/all', roleController.getRoles);
api.get('/:id', roleController.getRole);
api.post('/save', roleController.saveRole);
api.put('/update/:id', roleController.updateRole);
api.delete('/delete/:id', roleController.deleteRole);

module.exports = api;