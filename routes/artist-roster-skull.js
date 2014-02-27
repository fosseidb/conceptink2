var data = require('../artists.json');

exports.viewArtistRosterSkull = function(req, res){
	// controller code goes here
	console.log("The project name is Artistrosterskull");
	res.render('artist-roster-skull', data);
};