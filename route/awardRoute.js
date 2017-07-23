'use strict'

var express = require('express');
var awardController = require('../controller/awardController');
var api = express.Router();

api.get('/all', awardController.getAllAwards);
api.get('/:id', awardController.getAwardById);
api.post('/save', awardController.saveAward);
api.put('/update/:id', awardController.updateAward);
api.delete('/delete/:id', awardController.deleteAward);

module.exports = api;