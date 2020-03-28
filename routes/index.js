var express = require('express');
var router = express.Router();

var linkedlist = require('./linkedlist.js');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/ThankYou', function(req, res, next) {

  var node_email = req.body.email ;
  var node_name = req.body.name ;

  var info = [req.body.email,req.body.name];
  var nodeInfo = new linkedlist();
  nodeInfo.append(info);

  var getData = nodeInfo.getHead().toString();

  console.log(getData);


});

module.exports = router;