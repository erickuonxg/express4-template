var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/member', function(req, res, next) {
	req.session.count=req.session.count||0;
	res.render('member', { title: 'Express' , count:req.session.count++ , layout:'layout/index_layout.ejs' });
});


module.exports = router;
