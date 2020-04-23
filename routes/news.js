var express = require('express');
var router = express.Router();

var cnt_n =require('./count');
var cnt = new cnt_n();

/* GET data page. */
router.get('/', function(req, res, next) {
  console.time("settime");
  var n_vst = cnt.getCount_n();
  cnt.setCnt_news(n_vst);
  var test = cnt.getCount_n();
  cnt.addPage_news(test);
  var test2 = cnt.getCount_n()

  // cnt.addPage(n_vst);
  console.log(test2);
  console.timeEnd("settime");
  res.render('news');
});

module.exports = router;
