'use strict';
var express = require('express');
var router = require('./router');

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', router);

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Sorry, there was an error processing your request')
});

app.listen(8080, function() {
  console.log('running on port 8080')
});