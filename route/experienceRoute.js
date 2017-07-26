'use strict'

var express = require('express');
var experienceController = require('../controller/experienceController');
var api = express.Router();

api.get('/all', experienceController.getAll);
api.get('/:id', experienceController.getById);
api.post('/save', experienceController.save);
api.put('/update/:id', experienceController.update);
api.delete('/delete/:id', experienceController.deleteById);

module.exports = api;