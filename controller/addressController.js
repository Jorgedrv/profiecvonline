'use strict'

var Rx = require('rxjs/Rx');
var Address = require('../model/address');

function getAll(req, res) {
    Address.find({}).sort('-_id').exec((err, Addresses) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Addresses list'}); 
        }
        else {
            if (!Addresses) {
                res.status(404).send({message: 'Coulndt find any Addresses'});
            }
            else {
                res.status(200).send({List: Addresses}); 
            }
        }
    });
}

function getById(req, res) {
    var AddressId = req.params.id;

    Address.findById(AddressId, (err, Address) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Address'});
        }
        else {
            if (!Address) {
                res.status(404).send({message: 'The Address does not exist'});
            }
            else {
                res.status(200).send({Address: Address}); 
            }
        }
    });
}

function save(req, res) {
    var address = new Address();
    var params = req.body;

    address.address_one = params.address_one;
    address.address_two = params.address_two;
    address.zip_code = params.zip_code;
    address.country = params.country;
    address.user.userId = params.userId;

    address.save((err, AddressSaved)=> {
        if (err) {
            res.status(500).send({message: 'Error trying to save the Address'});
        }
        else {
            res.status(200).send({Saved: AddressSaved});
        }
    });
}

function update(req, res) {
    var addressId = req.params.id;
    var update = req.body;

    Address.findByIdAndUpdate(addressId, update, (err, AddressUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the Address'});
        }
        else {
            if (!AddressUpdated) {
                res.status(404).send({message: 'The Address does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The Address was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var addressId = req.params.id;

    Address.findByIdAndRemove(addressId, (err, AddressDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the Address'});
        }
        else {
            if (!AddressDeleted) {
                res.status(404).send({message: 'The Address does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The Address was deleted correctly'});
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