var express = require('express');
var router = express.Router();

var bclicks=0;
/* GET data page. */
router.get('/', function(req, res, next) {
  bclicks++;
  res.render('data',{bclicks:bclicks});
});

module.exports = router;
