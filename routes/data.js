var express = require('express');
var router = express.Router();

var cnt_b =require('./count');
var cnt = new cnt_b();


/* GET data page. */
router.get('/', function(req, res, next) {
  var n_vst = cnt.getCount_b();
  cnt.setCnt_blog(n_vst);
  var test = cnt.getCount_b();
  cnt.addPage_blog(test);
  var test2 = cnt.getCount_b()



  // cnt.addPage(n_vst);
  console.log(test2);

  res.render('data');
});


module.exports = router;
