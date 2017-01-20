'use strict';
var express = require('express');
var router = require('./router');

var app = express();
app.use('/', router);

app.listen(8080, function() {
  console.log('running on port 8080')
});