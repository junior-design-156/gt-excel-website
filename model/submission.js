var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: String,
    author: String,
    body: String,
    contactInfo: {
        email: String,
        phone: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    hidden: Boolean
});

module.exports = mongoose.model('submission', schema);