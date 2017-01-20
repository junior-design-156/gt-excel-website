'use strict';
var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');

router.use(express.static(__dirname + '/views'));
router.use(bodyParser.urlencoded({ extended: true }));

router.route('/') 
    .get(function(req, res) {
        res.sendFile('index');
    });

function handle_error(res, message) {
    res.render(message);
}

module.exports = router;