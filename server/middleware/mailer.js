var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'byteme.kjsce@gmail.com',
    pass: 'skullcandysoundlogic',
  },
});

module.exports = transporter;
