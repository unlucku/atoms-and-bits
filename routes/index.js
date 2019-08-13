var express = require('express');
var router = express.Router();
const path = require('path');

/* GET home page. */
router.get('/apply', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/apply.html'));
});

router.get('/sponsorships.pdf', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../public/sponsorship.pdf'));
});

res.sendFile(path.join(__dirname,'../public/sponsorship.pdf'));
});
module.exports = router;
