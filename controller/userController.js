'user scrict'

var Rx = require('rxjs/Rx');
var User = require('../model/user');
var Role = require('../model/role');

function getAll(req, res) {
    User.find({}).sort('-_id').exec((err, users) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the User List'});
        }
        else {
            if (!users) {
                res.status(404).send({message: 'Coulndt find any users'});
            } 
            else {
                res.status(200).send({users});
            }
        }
    });
}

function getById(req, res) {
    var userId = req.params.id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

    User.findById(userId, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the User List'});
        }
        else {
            if (!user) {
                res.status(404).send({message: 'The user does not exist'});
            } 
            else {
                res.status(200).send({user: user});
            }
        }
    });
}

function save(req, res) {
    console.log(req.body);
    var user = new User();
    var params = req.body;
    user.username = params.username;
    user.password = params.password;
    user.role     = {
        roleId : params.roleId
    };
    user.email    = params.email;

    user.save((err, userSave) => {
        if (err) {
            console.log('ERROR');
            res.status(500).send({message: 'Error trying to save the User'});
        }
        else {
            res.status(200).send({User: userSave});
        }
    });
}

function update(req, res) {
    var userId = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the User'});
        }
        else {  
            if (!userUpdate) {
                res.status(404).send({message: 'The user does not exist'});
            } 
            else {
                res.status(200).send({user: 'The user was updated correctly'});
            }
        }  
    });
}

function deleteById(req, res) {
    var userId = req.params.id;
    
    User.findByIdAndRemove(userId, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the User'});
        } 
        else {
            if(!user){
                res.status(404).send({message: 'The user does not exist'});
            }
            else {
                res.status(200).send({User: 'The User was deleted correctly'});
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