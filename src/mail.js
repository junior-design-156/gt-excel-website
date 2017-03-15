// 'use strict';
// const mailer = require('nodemailer');

// let transporter = mailer.createTransport({
//     service: 'gmail',
//     auth: {
//         user: 'exceltoolkittest',
//         pass: 'A3w8L9?AC-L(y$sB'
//     }
// });

// exports.confirmSubmission = function(req, res, next) {
//     transporter.sendMail({
//         from: '"GT Excel Career Development Toolkit" <exceltoolkittest@gmail.com>',
//         to: body.contactInfo.email,
//         subject: 'Your Job Listing',
//         text: 'Your listing has been successfully recorded. Our team will review it and get back to you.',
//         html: '<h1>Your Listing:</h1><br>\
//                <table border="1">\
//                <tr><td>Organization</td><td>'+body.orgTitle+'</td></tr>\
//                <tr><td>Job Title</td><td>'+body.jobTitle+'</td></tr></table>\
//                <tr><td>Description</td><td>'+body.jobDescription+'</td></tr></table>\
//                <tr><td>Contact</td><td>'+body.contactInfo.email+' or '+body.contactInfo.email+'</td></tr></table><br>\
//                <p href="http://localhost:8080/jobs/?id='+body.oid+'">Click here to edit</p>'
//     }, function(err, info) {
//         if (err) {
//             throw new Error(err);
//         }
//         console.log('Message %s sent: %s', info.messageId, info.response);
//         next(req, res, next)
//     });
// }