var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    orgTitle: String,
    jobTitle: String,
    jobDescription: String,
    contactInfo: {
        email: String,
        phone: String
    },
    date: { 
        type: Date, 
        default: Date.now 
    },
    hidden: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('jobListing', schema);