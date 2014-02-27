var data = require('../newsfeed.json');
exports.viewFeed = function(req, res){
	// controller code goes here
	console.log("The project name is newsfeed");
	console.log(data);
	res.render('newsfeed', data);
};