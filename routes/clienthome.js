//json feeds
var data = require('../newsfeed.json');

exports.viewProject = function(req, res){
	// controller code goes here
	console.log("The project name is");
	res.render('clienthome', data);
};