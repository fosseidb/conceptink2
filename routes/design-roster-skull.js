var designdata = require('../designfeed.json');

exports.viewDesignRosterSkull = function(req, res){
	// controller code goes here
	console.log("The project name is designrosterskull");
	console.log(designdata);
	res.render('design-roster-skull', designdata);
};

exports.viewDesignRosterSkullFeed = function(req, res){
	// controller code goes here
	console.log("The project name is designrosterskull");
	res.render('design-roster-skull', designdata);
};