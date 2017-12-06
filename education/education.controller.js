'use strict'

var Rx = require('rxjs/Rx');
var Education = require('../education/education');

function getAll(req, res) {
    Education.find({}).sort('-_id').exec((err, educations) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the education list'});
        }
        else {
            if (!educations) {
                res.status(404).send({message: "Couldnt find any educations"});
            }
            else {
                res.status(200).send({educations});
            }   
        }
    });
}

function getById(req, res) {
    var educationId = req.params.id;
    
    Education.findById(educationId, (err, education) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get an Education'});
        }
        else {
            if (!education) {
                res.status(404).send({message: 'The education does not exist'});
            }
            else {
                res.status(200).send({education: education});
            }
        }
    });
}

function save(req, res) {
    var education = new Education();

    var params = req.body;

    education.title = params.title;
    education.entity = params.entity;
    education.review = params.review;
    education.date_in = params.date_in;
    education.date_out = params.date_out;
    education.user.userId = params.userId;
    education.save((err, educationSaved) => {
        if (err) {
            res.status(500).send({message: 'Error trying to save the education'});
        }
        else {
            res.status(200).send({Education: educationSaved});
        }
    });
}

function update(req, res) {
    var educationId = req.params.id;
    var update = req.body;

    Education.findByIdAndUpdate(educationId, update, (err, educationUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the education'});
        }
        else {
            if (!educationUpdated) {
                res.status(404).send({message: 'The education does not exist'});
            }
            else {
                res.status(200).send({Education: 'The education was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var educationId = req.params.id;

    Education.findByIdAndRemove(educationId, (err, education) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get an education'});
        }
        else {
            if (!education) {
                res.status(404).send({message: 'The education does not exist'});
            }
            else{
                res.status(200).send({Role: 'The Education was deleted correctly'});
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
