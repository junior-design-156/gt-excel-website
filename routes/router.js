'use strict';
var express = require('express');
var router = express.Router();

router.use(express.static(__dirname + '/view'));

router.route('/') 
    .get(function(req, res) {
        res.sendFile('index');
    });

module.exports = router;
