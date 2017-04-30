'use strict';
var express = require('express');
var router = express.Router();
// var collection = require('../model/jobListing');
// var DbApi = require('../src/dbApi');
// var listings = new DbApi(collection);
var path = require('path');
var view = path.resolve(__dirname+'/../view');
var mailer = require('../src/mail');

router.route('/')
    .get(function(req, res, next) {
        res.sendFile(view+'/job-listing-form.html');
    })
    .post([
        // listings.add,
        function(req, res, next) {
            req.body.subject = 'Your Job Listing Submission';
            req.body.html = '<h1>Your Listing</h1></br>\
               <table border="1">\
               <tr><td>Organization</td><td>'+req.body.orgTitle+'</td></tr>\
               <tr><td>Job Title</td><td>'+req.body.jobTitle+'</td></tr>\
               <tr><td>Description</td><td>'+req.body.jobDescription+'</td></tr>\
               <tr><td>Contact</td><td>'+req.body.contactInfo.phone+' or '+req.body.contactInfo.email+'</td></tr></table><br>';
            next(null, req, res);
        },
        mailer.confirmPost,
        mailer.emailAdmin,
        function(req, res) {
            res.status(200).send();
        }
    ]);

// router.route('/:id')
//     .get([
//         listings.find,
//         function(req, res, next) {
//             res.json(req.body.doc);
//         }
//     ])
//     .put([
//         listings.update,
//         function() {
//             res.json(req.body.doc);
//         }
//     ])
//     .delete([
//         //TODO: verify delete?
//         listings.remove,
//         function(req, res) {
//             res.status(200).send(
//                 'We deleted your thing for you! It\'s gone now!'
//             );
//         }
//     ]);

module.exports = router;