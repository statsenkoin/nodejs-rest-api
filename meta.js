const nodemailer = require('nodemailer');
require('dotenv').config();

const { META_PASSWORD, META_USER } = process.env;

const nodemailerConfig = {
  host: 'smtp.meta.ua',
  port: 465,
  secure: true,
  auth: {
    user: META_USER,
    pass: META_PASSWORD,
  },
};

const transport = nodemailer.createTransport(nodemailerConfig);

const email = {
  from: META_USER,
  to: 'yexawe2014@vaband.com',
  subject: 'Send test email',
  text: 'Test email',
  html: '<p><b>Test email</b> sended</p>',
};

transport
  .sendMail(email)
  .then(() => {
    console.log('Test email sended successfilly');
  })
  .catch((error) => console.log(error.message));
