var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/apply', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/apply.html'));
});

module.exports = router;
