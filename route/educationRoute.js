'use strict'

var express = require('express');
var educationController = require('../controller/educationController');
var api = express.Router();

api.get('/all', educationController.getAllEducations);
api.get('/:id', educationController.getEducationById);
api.post('/save', educationController.saveEducation);
api.put('/update/:id', educationController.updateEducation);
api.delete('/delete/:id', educationController.deleteEducation);

module.exports = api;