var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

var linkedlist = require('./linkedlist.js');

var node_email;
var node_name;
var name_ary = ["name list"];

var node =new linkedlist();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.post('/',[
    check('email',"Please Input your Email").not().isEmpty(),
    check('name',"Please Input your Name").not().isEmpty() 
  ], function(req, res, next) {
    console.time("settime");
    const result = validationResult(req);   //check
    var errors=result.errors;
    if (!result.isEmpty()) {
      res.render('index', {errors:errors});
    }else{
      node_email = req.body.email ;
      node_name = req.body.name ;
      node.prepend(node_name);
      console.log(bclicks);
      console.log(nclicks);

      res.render('index');
    }
    console.timeEnd("settime");

});

router.get('/ThankYou',function(req,res,next){
  name_ary.push(node.toLinkString());
  res.send(name_ary);
});
//count click on blog and news
// var bclicks = 0;
// function blogClick() {
//   bclicks += 1 ;
// }

// var nclicks = 0;
// function newsClick() {
//   nclicks += 1 ;
// }      
module.exports = router;