'use strict';
var express = require('express');
var bodyParser = require('body-parser');
var jobRouter = require('./routes/router');
var mongoose = require('mongoose');
var path = require('path');
var view = path.resolve(__dirname+'/view');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/excel-job-search-toolkit');

var app = express();
app.use(express.static(view));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get(function(req, res) {
        res.sendFile(view+'/index.html');
    });

app.use('/jobs', jobRouter);

app.use(function (err, req, res, next) {
  if(err) {
    console.error(err.stack);
    // TODO: need an error html page
    res.status(500).send('Sorry, there was an error processing your request');
  }
});

app.listen(8080, function() {
  console.log('running on port 8080')
});