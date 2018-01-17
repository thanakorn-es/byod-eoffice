var express = require('express');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'e-Office Signin' });
});



router.post('/auth', function(req,res,next){
  if (!req.body) return res.sendStatus(400)

  var staffs = {
    "thanakorn.p" : {"nid": "1111111111111", "firstname": "thanakorn", "lastname": "piroonsith", "position": "51", "level": "3", "group": "501", "area": "12"},
    "tharathon.s": {"nid": "2222222222222", "firstname": "tharathon", "lastname": "sriyothee", "position": "51", "level": "5", "group": "325", "area": "51"},
    /*"": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
    "": {"firstname": "", "lastname": "", "position": "", "level": "", "group": "", "area": ""},
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
