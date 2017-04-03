'use strict';
var collection = require('../model/jobListing');

// to post articles
exports.add = function(req, res, next) {
    var doc = new collection(req.body);
    doc.save(function(err) {
        next(err, req, res);
    });
}

// to view the detailed article
exports.find = function find(req, res, next) {
    collection.findById(req.params.id, function(err, doc) {
        if(doc) {
            req.body.doc = doc;
        }
        next(err, req, res);
    });
}

// for when author wants to  make changes
exports.update = function(req, res, next) {
    collection.update({ ObjectId: req.params.id }, req.body, function(err, doc) {
        if(doc) {
            res.body.doc = doc;
        }
        next(err, req, res);
    });
}

// for when mod disapproves or author deletes 
exports.remove = function(req, res, next) {
    collection.findById(req.body.id, function(err) {
        next(err, req, res);
    });
}

// used for searching and stuff
exports.findAll = function(req, res, next) {
    collection.findAll(req.body, function(err, docs) {
        if(docs) {
            req.body.docs = docs;
        }
        next(err, req, res);
    });
}