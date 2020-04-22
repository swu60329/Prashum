var express = require('express');
var router = express.Router();

var nclicks=0;

/* GET data page. */
router.get('/', function(req, res, next) {
  nclicks++;
  res.render('news',{nclicks:nclicks});
});

module.exports = router;
