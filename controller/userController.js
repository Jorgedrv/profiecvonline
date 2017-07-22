'user scrict'
var Rx = require('rxjs/Rx');
var User = require('../model/user');
var Role = require('../model/role');

function getUsers(req, res){
    User.find({}).sort('-_id').exec((err, users) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the User List'});
        }
        else {
            if (!users) {
                res.status(404).send({message: 'No Users'});
            } 
            else {
                res.status(200).send({users});
            }
        }
    });
}

function getUser(req, res){
    var userId = req.params.id;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                             

    User.findById(userId, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the User List'});
        }
        else {
            if (!user) {
                res.status(404).send({message: 'No User was found'});
            } 
            else {
                res.status(200).send({user: user});
            }
        }
    });
}

function saveUser(req, res){
    var user = new User();

    var params = req.body;

    user.username = params.username;
    user.password = params.password;
    user.role     = params.role;
    user.email    = params.email;
    user.status   = params.status;
    
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

function updateUser(req, res){
    var userId = req.params.id;
    var update = req.body;

    User.findByIdAndUpdate(userId, update, (err, userUpdate) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the User'});
        }
        else {  
            if (!userUpdate) {
                res.status(404).send({message: 'No User was found'});
            } 
            else {
                res.status(200).send({user: userUpdate});
            }
        }  
    });
}

function deleteUser(req, res){
    var userId = req.params.id;
    
    User.findById(userId, (err, user) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the User'});
        } 
        else {
            if(!user){
                res.status(404).send({message: 'Couldnt find any User'});
            }
            else {
                user.remove(err => {
                    if (err) {
                        res.status(500).send({message: 'The User coulndt be deleted'});
                    }
                    else {
                        res.status(200).send({User: 'The User was deleted correctly'});
                    }
                });
            }
        }
    });
}

module.exports = {
    getUsers,
    getUser,
    saveUser,
    updateUser,
    deleteUser
}