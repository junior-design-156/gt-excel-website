var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    agencyTitle: String,
    agencyDescription: String,
    address: {
        line1: String,
        line2: String,
        city: String,
        state: String,
        county: String,
        zip: String
    },
    contactInfo: {
        email: String,
        phone: String
    },
    hidden: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('localResource', schema);