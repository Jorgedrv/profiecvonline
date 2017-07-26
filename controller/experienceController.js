'use strict'

var Rx = require('rxjs/Rx');
var Experience = require('../model/experience');

function getAll(req, res) {
    Experience.find({}).sort('-_id').exec((err, experiences) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get a experiences list'});
        }
        else {
            if (!experiences) {
                res.status(404).send({message: "Couldnt find any experiences"});
            }
            else {
                res.status(200).send({experiences});
            }
        }
    });
}

function getById(req, res) {
    var experienceId = req.params.id;

    Experience.findById(experienceId, (err, experience) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get an experience'});
        }
        else {
            if (!experience) {
                res.status(404).send({message: 'The experience does not exist'});
            }
            else {
                res.status(200).send({Experience: experience});
            }
        }
    });
}

function save(req, res) {
    var experience = new Experience();

    var params = req.body;

    experience.title = params.title;
    experience.enterprise = params.enterprise;
    experience.testimonial = params.testimonial;
    experience.review = params.review;
    experience.icon = params.icon;
    experience.date_in = params.date_in;
    experience.date_out = params.date_out;
    experience.user.userId = params.userId;
    experience.save((err, experienceSaved) => {
        if (err) {
            res.status(500).send({message: 'Error trying to save the experience'});
        }
        else {
            res.status(200).send({Experience: experienceSaved});
        }
    });
}

function update(req, res) {
    var experienceId = req.params.id;
    var update = req.body;

    Experience.findByIdAndUpdate(experienceId, update, (err, experienceUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the experience'});
        }
        else {
            if (!experienceUpdated) {
                res.status(404).send({message: 'The experience does not exist'});
            }
            else {
                res.status(200).send({Experience: 'The experience was updated correctly'});
            }
        }
    });
} 

function deleteById(req, res) {
    var experienceId = req.params.id;

    Experience.findByIdAndRemove(experienceId, (err, experienceDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the experience'});
        }
        else {
            if (!experienceDeleted) {
                res.status(404).send({message: 'The experience does not exist'});
            }
            else {
                res.status(200).send({message: 'The experience was deleted correctly'});
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