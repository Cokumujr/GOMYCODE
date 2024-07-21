
const nodemailer = require('nodemailer');

// Configure the transporter
let transporter = nodemailer.createTransport({
  service: 'gmail', 
  auth: {
    user: 'youremail@gmail.com', 
    pass: 'your password'         
  }
});

// Configure the email options
let mailOptions = {
  from: 'youremail@gmail.com',
  to: 'recepientemail@gmail.com',
  subject: 'Test Email',
  text: 'Hello from Node.js assignment!'
};

// Send the email
transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
