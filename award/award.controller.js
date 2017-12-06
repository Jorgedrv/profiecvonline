'use strict'

var Rx = require('rxjs/Rx');
var Award = require('../award/award');

function getAll(req, res) {
    Award.find({}).sort('-_id').exec((err, awards) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the awards list'}); 
        }
        else {
            if (!awards) {
                res.status(404).send({message: 'Coulndt find any awards'});
            }
            else {
                res.status(200).send({List: awards}); 
            }
        }
    });
}

function getById(req, res) {
    var awardId = req.params.id;

    Award.findById(awardId, (err, award) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the award'});
        }
        else {
            if (!award) {
                res.status(404).send({message: 'The award does not exist'});
            }
            else {
                res.status(200).send({Award: award}); 
            }
        }
    });
}

function save(req, res) {
    var award = new Award();
    var params = req.body;

    award.title = params.title;
    award.subtitle = params.subtitle;
    award.review = params.review;
    award.icon = params.icon;
    award.user.userId = params.userId;

    award.save((err, awardSaved)=> {
        if (err) {
            res.status(500).send({message: 'Error trying to save the award'});
        }
        else {
            res.status(200).send({Saved: awardSaved});
        }
    });
}

function update(req, res) {
    var awardId = req.params.id;
    var update = req.body;

    Award.findByIdAndUpdate(awardId, update, (err, awardUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the award'});
        }
        else {
            if (!awardUpdated) {
                res.status(404).send({message: 'The award does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The award was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var awardId = req.params.id;

    Award.findByIdAndRemove(awardId, (err, awardDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the award'});
        }
        else {
            if (!awardDeleted) {
                res.status(404).send({message: 'The award does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The award was deleted correctly'});
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
