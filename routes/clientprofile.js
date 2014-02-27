//json feed
var data = require('../userprofile.json');
exports.viewCProfile = function(req, res){
	// controller code goes here
	var user = data.users[0];
	console.log("The project name is clientprofile");
	res.render('clientprofile', user);
};