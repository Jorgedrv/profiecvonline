'use strict'

var express = require('express');
var portfolioController = require('../controller/portfolioController');
var api = express.Router();

api.get('/all', portfolioController.getAll);
api.get('/:id', portfolioController.getById);
api.post('/save', portfolioController.save);
api.put('/update/:id', portfolioController.update);
api.delete('/delete/:id', portfolioController.deleteById);

module.exports = api;