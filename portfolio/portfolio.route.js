'use strict'

var express = require('express');
var controller = require('../portfolio/portfolio.controller');
var portfolio = express.Router();

portfolio.get('/all', controller.getAll);
portfolio.get('/:id', controller.getById);
portfolio.post('/save', controller.save);
portfolio.put('/update/:id', controller.update);
portfolio.delete('/delete/:id', controller.deleteById);

module.exports = portfolio;
