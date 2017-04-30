'use strict';
var express = require('express');
var router = express.Router();
// var collection = require('../model/localResource');
// var DbApi = require('../src/dbApi');
// var resources = new DbApi(collection);
var path = require('path');
var view = path.resolve(__dirname+'/../view');
var mailer = require('../src/mail');

router.route('/')
    .get(function(req, res, next) {
        res.sendFile(view+'/local-resource-form.html');
    })
    .post([
        // resources.add,
        function(req, res, next) {
            req.body.subject = 'Your Local Resource Submission'
            req.body.text = '<h1>Your Post:</h1><br>\
                <table border="1">\
                <tr><td>Agency</td><td>'+req.body.agencyTitle+'</td></tr>\
                <tr><td>Description</td><td>'+req.body.agencyDescription+'</td></tr></table>\
                <tr><td>Location</td><td>'+req.body.address1+'</br>'+req.body.address2+'</br>'
                    +req.body.city+', '+req.body.state+' '+req.body.zip+'</td></tr></table>\
                <tr><td>Contact</td><td>'+req.body.contactInfo.email+' or '+req.body.contactInfo.phone+'</td></tr></table><br>\
                <p href="http://localhost:8080/jobs/?id='+req.body.oid+'">Click here to edit</p>';
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
//         resources.find,
//         function(req, res, next) {
//             // TODO: should respond with some kind of editing interface
//             res.json(req.body.doc);
//         }
//     ])
//     .put([
//         resources.update,
//         function() {
//             res.json(req.body.doc);
//         }
//     ])
//     .delete([
//         //verify delete?
//         resources.remove,
//         function(req, res) {
//             res.status(200).send(
//                 'We deleted your thing for you! It\'s gone now!'
//             );
//         }
//     ]);

module.exports = router;