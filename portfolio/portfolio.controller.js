'use strict'

var Rx = require('rxjs/Rx');
var Portfolio = require('../portfolio/portfolio');

function getAll(req, res) {
    Portfolio.find({}).sort('-_id').exec((err, Portfolios) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Portfolios list'}); 
        }
        else {
            if (!Portfolios) {
                res.status(404).send({message: 'Coulndt find any Portfolios'});
            }
            else {
                res.status(200).send({List: Portfolios}); 
            }
        }
    });
}

function getById(req, res) {
    var portfolioId = req.params.id;

    Portfolio.findById(portfolioId, (err, Portfolio) => {
        if (err) {
            res.status(500).send({message: 'Error trying to get the Portfolio'});
        }
        else {
            if (!Portfolio) {
                res.status(404).send({message: 'The Portfolio does not exist'});
            }
            else {
                res.status(200).send({Portfolio: Portfolio}); 
            }
        }
    });
}

function save(req, res) {
    var portfolio = new Portfolio();
    var params = req.body;

    portfolio.type = params.type;
    portfolio.title = params.title;
    portfolio.review = params.review;
    portfolio.introduction = params.introduction;
    portfolio.user.userId = params.userId;

    portfolio.save((err, PortfolioSaved)=> {
        if (err) {
            res.status(500).send({message: 'Error trying to save the Portfolio'});
        }
        else {
            res.status(200).send({Saved: PortfolioSaved});
        }
    });
}

function update(req, res) {
    var portfolioId = req.params.id;
    var update = req.body;

    Portfolio.findByIdAndUpdate(portfolioId, update, (err, PortfolioUpdated) => {
        if (err) {
            res.status(500).send({message: 'Error trying to update the Portfolio'});
        }
        else {
            if (!PortfolioUpdated) {
                res.status(404).send({message: 'The Portfolio does not exist'});
            }
            else {
                res.status(200).send({Updated: 'The Portfolio was updated correctly'});
            }
        }
    });
}

function deleteById(req, res) {
    var portfolioId = req.params.id;

    Portfolio.findByIdAndRemove(portfolioId, (err, PortfolioDeleted) => {
        if (err) {
            res.status(500).send({message: 'Error trying to delete the Portfolio'});
        }
        else {
            if (!PortfolioDeleted) {
                res.status(404).send({message: 'The Portfolio does not exist'});
            }
            else {
                res.status(200).send({Deleted: 'The Portfolio was deleted correctly'});
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
