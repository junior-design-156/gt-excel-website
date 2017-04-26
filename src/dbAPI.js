'use strict';

function dbApi(collection) { 
    var self = this;
    self.collection = collection;

    // to post
    self.add = function(req, res, next) {
        var doc = new self.collection(req.body);
        doc.save(function(err) {
            next(err, req, res);
        });
    }

    // to view details
    self.find = function find(req, res, next) {
        self.collection.findById(req.params.id, function(err, doc) {
            if(doc) {
                req.body.doc = doc;
            }
            next(err, req, res);
        });
    }

    // for when poster wants to  make changes
    self.update = function(req, res, next) {
        self.collection.update({ ObjectId: req.params.id }, req.body, function(err, doc) {
            if(doc) {
                res.body.doc = doc;
            }
            next(err, req, res);
        });
    }

    // for when mod disapproves or poster deletes 
    self.remove = function(req, res, next) {
        self.collection.findById(req.body.id, function(err) {
            next(err, req, res);
        });
    }

    // used for searching and stuff
    self.findAll = function(req, res, next) {
        self.collection.findAll(req.body, function(err, docs) {
            if(docs) {
                req.body.docs = docs;
            }
            next(err, req, res);
        });
    }

    return self; 
};


module.exports = dbApi;