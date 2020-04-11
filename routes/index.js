var express = require('express');
var router = express.Router();
const { check, validationResult } = require('express-validator');

var linkedlist = require('./linkedlist.js');

var node_email;
var node_name;

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

      res.render('index');
    }
    console.timeEnd("settime");

});

router.get('/ThankYou',function(req,res,next){
  // var data=node.getHead().toString(); 
  // var preData = node.find(data); 
  //   if (preData){
  //     var prvData = preData.reverse().toLinkString();
  //     res.send(data+prvData);
  //   }else{
  //     res.send(data);
  //   }
  res.send(node.toArray());
  
});

var bclicks = 0;
function blogClick() {
  document.getElementById('bclicked').value = ++bclicks;
}

var nclicks = 0;
function newsClick() {
  document.getElementById('nclicked').value = ++nclicks;
}
      
module.exports = router;