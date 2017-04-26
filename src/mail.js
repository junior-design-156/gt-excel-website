'use strict';
const mailer = require('nodemailer');

let transporter = mailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'exceltoolkittest',
        pass: 'A3w8L9?AC-L(y$sB'
    }
});

exports.confirmPost = function(req, res, next) {
    transporter.sendMail({
        from: '"GT Excel Career Development Toolkit" <exceltoolkittest@gmail.com>',
        to: req.body.contactInfo.email,
        subject: req.body.subject,
        text: 'Your submission has been successfully recorded. Our team will review it and get back to you.',
        html: req.body.html + '<a href="http://localhost:8080/jobs/?id='+req.body.oid+'">Click here to edit</a>'
    }, function(err, info) {
        if (err) {
            throw new Error(err);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        next(null, req, res)
    });
}

exports.emailAdmin = function(req, res, next) {
    transporter.sendMail({
        from: '"GT Excel Career Development Toolkit" <exceltoolkittest@gmail.com>',
        to: 'skbush13@gmail.com',
        subject: 'New Toolkit Post',
        text: 'A new post requires review.',
        html: req.body.html + '<a href="http://localhost:8080/jobs/?id='+req.body.oid+'&action=show">Approve</a> '
                + ' <a href="http://localhost:8080/jobs/?id='+req.body.oid+'&action=delete">Deny</a>'
    }, function(err, info) {
        if (err) {
            throw new Error(err);
        }
        console.log('Message %s sent: %s', info.messageId, info.response);
        next(null, req, res)
    });
}