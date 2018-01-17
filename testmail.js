var nodemailer = require("nodemailer");
const SMTPConnection = require('nodemailer/lib/smtp-connection');



const mailOptions = {
      from: 'byod@excise.go.th', // sender address
      to: 'thanakorn.prs@gmail.com', // list of receivers
      subject: 'Customer Satisfaction Survey', // Subject line
      html: 'To valued staffs,<br><br>Please complete survey link to improve our service in the future <br> <a href="http://192.168.163.28:3000/custsat">Link</a><br><br>Thank you.<br><br>Administrator'// plain text body
    };

/*
    var transporter = nodemailer.createTransport({
      host: '61.19.233.5',
      port: 25,
      secure: false,
      ignoreTLS: true,
      debug: true,
      auth: {
        user: 'byod@excise.go.th',
        pass: 'byod1234'
      }
    });*/


    var transporter = nodemailer.createTransport({
      host: 'smtp.mailtrap.io',
      port: 2525,
      secure: false,
      auth: {
        user: '59ad65f3b7fa3b',
        pass: '7e4387ba355422'
      }
    });

    transporter.verify(function(error,success){
      if(error) console.log('error');
      else console.log('ready');
    })
    transporter.sendMail(mailOptions, function (err, info) {
      if(err){
        console.log(err)
        console.log('ERROR');
      }
      else{
        console.log(info);
        console.log('Success');
      }
      //res.redirect('/profile/login');
    });
