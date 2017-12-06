'use strict'

var Rx = require('rxjs/Rx');
var Skill = require('../skill/skill');

function getAll(req, res) {
    Skill.find({}).sort('-_id').exec((err, Skills) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Skills list'}); 
        }
        else {
            if (!Skills) {
                res.status(404).send({message: 'Coulndt find any Skills'});
            }
            else {
                res.status(200).send({List: Skills}); 
            }
        }
    });
}

function getById(req, res) {
    var skillId = req.params.id;

    Skill.findById(skillId, (err, Skill) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Skill'});
        }
        else {
            if (!Skill) {
                res.status(404).send({message: 'The Skill does not exist'});
            }
            else {
                res.status(200).send({Skill: Skill}); 
            }
        }
    });
}

function save(req, res) {
    var skill = new Skill();
    var params = req.body;

    skill.description = params.description;
    skill.code = params.code;
    skill.knowledge = params.knowledge;
    skill.user.userId = params.userId;

    skill.save((err, SkillSaved)=> {
        if (err) {
            res.status(500).send({message: 'Error trying to save the Skill'});
        }
        else {
            res.status(200).send({Saved: SkillSaved});
        }
    });
}

function update(req, res) {
    var skillId = req.params.id;
    var update = req.body;

    Skill.findByIdAndUpdate(skillId, update, (err, SkillUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the Skill'});
        }
        else {
            if (!SkillUpdated) {
                res.status(404).send({message: 'The Skill does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The Skill was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var skillId = req.params.id;

    Skill.findByIdAndRemove(skillId, (err, SkillDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the Skill'});
        }
        else {
            if (!SkillDeleted) {
                res.status(404).send({message: 'The Skill does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The Skill was deleted correctly'});
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
