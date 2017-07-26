'use strict'

var Rx = require('rxjs/Rx');
var About = require('../model/about');

function getAll(req, res) {
    About.find({}).sort('-_id').exec((err, Abouts) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Abouts list'}); 
        }
        else {
            if (!Abouts) {
                res.status(404).send({message: 'Coulndt find any Abouts'});
            }
            else {
                res.status(200).send({List: Abouts}); 
            }
        }
    });
}

function getById(req, res) {
    var AboutId = req.params.id;

    About.findById(AboutId, (err, About) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the About'});
        }
        else {
            if (!About) {
                res.status(404).send({message: 'The About does not exist'});
            }
            else {
                res.status(200).send({About: About}); 
            }
        }
    });
}

function save(req, res) {
    var about = new About();
    var params = req.body;

    about.review = params.review;
    about.skill = params.skill;
    about.profile = params.profile;
    about.introduction = params.introduction;
    about.user.userId = params.userId;

    about.save((err, AboutSaved)=> {
        if (err) {
            res.status(500).send({message: 'Error trying to save the About'});
        }
        else {
            res.status(200).send({Saved: AboutSaved});
        }
    });
}

function update(req, res) {
    var AboutId = req.params.id;
    var update = req.body;

    About.findByIdAndUpdate(AboutId, update, (err, AboutUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the About'});
        }
        else {
            if (!AboutUpdated) {
                res.status(404).send({message: 'The About does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The About was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var AboutId = req.params.id;

    About.findByIdAndRemove(AboutId, (err, AboutDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the About'});
        }
        else {
            if (!AboutDeleted) {
                res.status(404).send({message: 'The About does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The About was deleted correctly'});
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