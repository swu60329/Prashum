var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

var linkedlist = require('./linkedlist.js');

var node_email;
var node_name;

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.post('/',[
    check('email',"Please Input your Email").not().isEmpty(),
    check('name',"Please Input your Name").not().isEmpty() 
  ], function(req, res, next) {
    const result = validationResult(req);   //check
    var errors=result.errors;
    if (!result.isEmpty()) {
      res.render('index', {errors:errors});
    }else{
      //insert to db
    }
 
  node_email = req.body.email ;
  node_name = req.body.name ;

  var info = [req.body.email,req.body.name];
  res.send(info);

//  console.log(info);


});

module.exports = router;