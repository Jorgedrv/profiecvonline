'use strict'

var Rx = require('rxjs/Rx');
var Blog = require('../blog/blog');

function getAll(req, res) {
    Blog.find({}).sort('-_id').exec((err, blogs) => {
        if (err) {
            res.status(500).send({message: 'Error traying to get the blog list'});
        }
        else {
            if (!blogs) {
                res.status(404).send({message: 'Couldt find any blog'});  
            }
            else {
                res.status(200).send({Blogs: blogs});
            }
        }
    });
}

function getById(req, res) {
    var blogId = req.params.id;

    Blog.findById(blogId, (err, blog) => {
        if (err) {
            res.status(500).send({message: 'Error traying to get the list'});
        }
        else {
            if (!blog) {
                res.status(404).send({message: 'The blog does not exist'}); 
            }
            else {
                res.status(200).send({Blog: blog});
            }
        }
    });
}

function save(req, res) {
    var blog = new Blog();

    var params = req.body;
    blog.title = params.title;
    blog.description = params.description;
    blog.review = params.review;
    blog.icon = params.icon;
    blog.user.userId = params.userId;
    blog.save((err, blogSaved) => {
        if (err) {
            res.status(500).send({message: 'Error traying to save the list'});
        }
        else {
            res.status(200).send({Saved: blog});
        }
    });
}

function update(req, res) {
    var blogId = req.params.id;
    var update = req.body;

    Blog.findByIdAndUpdate(blogId, update, (err, blogUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error traying to update the list'});
        }
        else {
            if (!blogUpdated) {
                res.status(404).send({message: 'The blog does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The blog was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var blogId = req.params.id;

    Blog.findByIdAndRemove(blogId, (err, blogDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error traying to delete the blog'}); 
        }
        else {
            if (!blogDeleted) {
                 res.status(404).send({message: 'The blog does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The blog was deleted correctly'});
            }
        }
    });
}

module.exports = {
    getAll,
    getById,
    save,
    update, 
    deleteById
}
