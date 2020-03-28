var express = require('express');
var router = express.Router();

var node_email;
var node_name;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ThankYou', function(req, res, next) {

  node_email = req.body.email ;
  node_name = req.body.name ;

  var info = [req.body.email,req.body.name];
  

  console.log(info);


});

module.exports = router;
