'use strict'

var express = require('express');
var experienceController = require('../controller/experienceController');
var api = express.Router();

api.get('/all', experienceController.getAllExperiences);
api.get('/:id', experienceController.getExperienceById);
api.post('/save', experienceController.saveExperience);
api.put('/update/:id', experienceController.updateExperience);
api.delete('/delete/:id', experienceController.deleleExperience);

module.exports = api;