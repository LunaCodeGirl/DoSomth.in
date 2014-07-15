var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
	var db = req.db;
	var collection = db.get('case');
	collection.find({},{},function(e,cases){

		debugger;

		res.render('index', {
			title: 'Express',
			caseList: cases
		});

	});
	// res.render('index', { title: 'Express' });
});

module.exports = router;
