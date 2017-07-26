'use strict'

var Rx = require('rxjs/Rx');
var Expertise = require('../model/expertise');

function getAll(req, res) {
    Expertise.find({}).sort('-_id').exec((err, Expertises) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Expertises list'}); 
        }
        else {
            if (!Expertises) {
                res.status(404).send({message: 'Coulndt find any Expertises'});
            }
            else {
                res.status(200).send({List: Expertises}); 
            }
        }
    });
}

function getById(req, res) {
    var expertiseId = req.params.id;

    Expertise.findById(expertiseId, (err, Expertise) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Expertise'});
        }
        else {
            if (!Expertise) {
                res.status(404).send({message: 'The Expertise does not exist'});
            }
            else {
                res.status(200).send({Expertise: Expertise}); 
            }
        }
    });
}

function save(req, res) {
    var expertise = new Expertise();
    var params = req.body;

    expertise.review = params.review;
    expertise.skill = params.skill;
    expertise.profile = params.profile;
    expertise.introduction = params.introduction;
    expertise.user.userId = params.userId;

    expertise.save((err, ExpertiseSaved)=> {
        if (err) {
            res.status(500).send({message: 'Error trying to save the Expertise'});
        }
        else {
            res.status(200).send({Saved: ExpertiseSaved});
        }
    });
}

function update(req, res) {
    var expertiseId = req.params.id;
    var update = req.body;

    Expertise.findByIdAndUpdate(expertiseId, update, (err, ExpertiseUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the Expertise'});
        }
        else {
            if (!ExpertiseUpdated) {
                res.status(404).send({message: 'The Expertise does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The Expertise was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var expertiseId = req.params.id;

    Expertise.findByIdAndRemove(expertiseId, (err, ExpertiseDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the Expertise'});
        }
        else {
            if (!ExpertiseDeleted) {
                res.status(404).send({message: 'The Expertise does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The Expertise was deleted correctly'});
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