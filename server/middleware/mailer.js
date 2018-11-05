var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'pocketkampus@gmail.com',
    pass: '123456789@pk',
  },
});

module.exports = transporter;
