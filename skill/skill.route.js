'use strict'

var express = require('express');
var controller = require('../skill/skill.controller');
var skill = express.Router();

skill.get('/all', controller.getAll);
skill.get('/:id', controller.getById);
skill.post('/save', controller.save);
skill.put('/update/:id', controller.update);
skill.delete('/delete/:id', controller.deleteById);

module.exports = skill;
