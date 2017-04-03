'use strict';
var express = require('express');
var router = express.Router();
var listings = require('../src/dbAPI');
var path = require('path');
var view = path.resolve(__dirname+'/../view');
// var mailer = require('../src/mail');

router.route('/')
    .get(function(req, res, next) {
        res.sendFile(view+'/form.html');
    })
    .post([
        listings.add,
        function(req, res, next) {
            // mailer.confirmSubmission(req.body);
            // mailer.emailAdmin(req.body);
            next(null, req, res);
        },
        function(req, res) {
            res.status(200).send();
        }
    ]);

router.route('/:id')
    .get([
        listings.find,
        function(req, res, next) {
            res.json(req.body.doc);
        }
    ])
    .put([
        listings.update,
        function() {
            res.json(req.body.doc);
        }
    ])
    .delete([
        //verify delete?
        listings.remove,
        function(req, res) {
            res.status(200).send(
                'We deleted your thing for you! It\'s gone now!'
            );
        }
    ]);

router.route('/search')
    .post(function(req, res, next) {

    });

module.exports = router;