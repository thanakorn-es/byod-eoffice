var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodemailer = require("nodemailer");
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'e-Office Signin' });
});

router.get('/email',function(req,res,next){
  let mailConfig = {
    host: '61.19.233.5',
    port: 25,
    auth: {
        user: 'byod@excise.go.th',
        pass: 'byod1234'
    }
  };

  let transporter = nodemailer.createTransport(mailConfig);

  transporter.verify(function(error, success) {
   if (error) {
        res.send('error');
   } else {
        res.send('Server is ready to take our messages');
   }
  });
  //transporter.sendMail(data[, callback])



  /*
  var smtp = {
    host: '61.19.233.5', //set to your host name or ip
    port: 25, //25, 465, 587 depend on your
    secure: false, // use SSL
    auth: {
      user: 'byod@excise.go.th', //user account
      pass: 'byod1234' //user password
    }
  };
  var smtpTransport = mailer.createTransport(smtp);

  var mail = {
   from: 'byod@excise.go.th', //from email (option)
   to: 'thanakorn.prs@gmail.com', //to email (require)
   subject: "TEST", //subject
   html: `<p>Test</p>`  //email body
  }

  smtpTransport.sendMail(mail, function(error, response){
    smtpTransport.close();
    if(error){
      //error handler
      res.send(error);
    }else{
      //success handler
      res.send('send email success');
    }
  });*/
});

router.post('/auth', function(req,res,next){
  if (!req.body) return res.sendStatus(400)

  var staffs = {
    "thanakorn.p" : {"nid": "1111111111111", "firstname": "thanakorn", "lastname": "piroonsith", "position": "51", "level": "3", "group": "501", "area": "12"},
    "tharathon.s": {"nid": "2222222222222", "firstname": "tharathon", "lastname": "sriyothee", "position": "51", "level": "5", "group": "325", "area": "51"},
    "natthawat_a": {"nid": "2222222222223", "firstname": "natthawat", "lastname": "arunn", "position": "12", "level": "20", "group": "100", "area": "12"},
    /*"": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},*/
  };

  if( staffs[req.body.username] ){
    //res.send('welcome, ' + staffs[req.body.username].lastname);
    res.render('profile', {
      title: 'Welcome ' + staffs[req.body.username].firstname + " " + staffs[req.body.username].lastname,
      firstname: staffs[req.body.username].firstname,
      lastname: staffs[req.body.username].lastname,
      position: staffs[req.body.username].position,
      level: staffs[req.body.username].level,
      group: staffs[req.body.username].group,
      area: staffs[req.body.username].area,
      link: 'http://localhost:3000/fprofile/device/'
        + staffs[req.body.username].nid + '/'
        + staffs[req.body.username].firstname + '/'
        + staffs[req.body.username].lastname + '/'
        + staffs[req.body.username].position + '/'
        + staffs[req.body.username].level + '/'
        + staffs[req.body.username].group + '/'
        + staffs[req.body.username].area
    });
  }
  else{
    //res.send('Welcome new user. We are automatically creating WiFi and Email account for you');
    res.render('profile', {
      title: 'Welcome new user. We are automatically creating WiFi and Email account for you',
      firstname: '',
      lastname: '',
      position: '',
      level: '',
      group: '',
      area: '',
      link: '',
    });
  }
});




module.exports = router;
