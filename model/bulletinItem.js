var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schema = new Schema({
    title: String,
    body: String,
    images: [{
        image: String,
        caption: String
    }],
    date: { 
        type: Date, 
        default: Date.now 
    },
    hidden: Boolean
});

module.exports = mongoose.model('bulletinitem', schema);