var express = require('express');
var router = express.Router();

var bclicks = 0;
var nclicks = 0;

function blogClick() {
  bclicks += 1 ;
}

function newsClick() {
  nclicks += 1 ;
}


module.exports = router;