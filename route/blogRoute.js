'use strict'

var express = require('express');
var blogController = require('../controller/blogController');
var api = express.Router();

api.get('/all', blogController.getAllBlogs);
api.get('/:id', blogController.getBlogById);
api.post('/save', blogController.saveBlog);
api.put('/update/:id', blogController.updateBlog);
api.delete('/delete/:id', blogController.deleteBlog);

module.exports = api;