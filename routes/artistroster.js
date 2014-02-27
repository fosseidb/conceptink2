var data = require('../artists.json');
exports.viewArtists = function(req, res){
	// controller code goes here
	console.log("The project name is artistroster");
	console.log(data);
	res.render('artistroster', data);
};