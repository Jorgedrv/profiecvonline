'user scrict'

var Rx = require('rxjs/Rx');
var Role = require('../model/role');

function getAllRoles(req, res) {
    Role.find({}).sort('-_id').exec((err, roles) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Roles List'});
        }
        else {
            if (!roles) {
                res.status(404).send({message: 'No Roles'});
            } 
            else {
                res.status(200).send({roles});
            }
        }
    });
}

function getRoleById(req, res) {
    var roleId = req.params.id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

    Role.findById(roleId, (err, role) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Role List'});
        }
        else {
            if (!role) {
                res.status(404).send({message: 'The role does not exist'});
            } 
            else {
                res.status(200).send({role: role});
            }
        }
    });
}

function saveRole(req, res) {
    var role = new Role();

    var params = req.body;

    role.description = params.description;
    role.code        = params.code;
    role.status      = params.status;
    
    role.save((err, roleSaved) => {
        if (err) {
            console.log('ERROR');
            res.status(500).send({message: 'Error trying to save the Role'});
        }
        else {
            res.status(200).send({User: roleSaved});
        }
    });
}

function updateRole(req, res) {
    var roleId = req.params.id;
    var update = req.body;

    Role.findByIdAndUpdate(roleId, update, (err, roleUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the Role'});
        }
        else {  
            if (!roleUpdated) {
                res.status(404).send({message: 'The role does not exist'});
            } 
            else {
                res.status(200).send({role: 'the experience was updated correctly'});
            }
        }  
    });
}

function deleteRole(req, res) {
    var roleId = req.params.id;
    
    Role.findByIdAndRemove(roleId, (err, role) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Role'});
        } 
        else {
            if(!role){
                res.status(404).send({message: 'The role does not exist'});
            }
            else {
                res.status(200).send({Role: 'The Role was deleted correctly'});
            }
        }
    });
}

module.exports = {
    getAllRoles,
    getRoleById,
    saveRole,
    updateRole,
    deleteRole
}