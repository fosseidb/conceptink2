var designdata = require('../designfeed.json');

exports.viewDesignRosterSkull = function(req, res){
	// controller code goes here
	designdata.feed = true;
	console.log("The project name is designrosterskullfeed");
	res.render('design-roster-skull', designdata);
};

