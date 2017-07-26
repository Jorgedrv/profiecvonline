'use strict'

var express = require('express');
var addressController = require('../controller/addressController');
var api = express.Router();

api.get('/all', awardController.getAll);
api.get('/:id', awardController.getById);
api.post('/save', awardController.save);
api.put('/update/:id', awardController.update);
api.delete('/delete/:id', awardController.deleteById);

module.exports = api;