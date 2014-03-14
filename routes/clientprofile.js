//json feed
var udata = require('../userprofile.json');
var dData = require('../designfeed.json');

exports.viewCProfile = function(req, res){
	// controller code goes here
	var user = udata.users[0];
	var designs = dData.designs;

	console.log("The project name is clientprofile");

	var thisDesigns = {"designs":[]};

	for (var i=0; i< designs.length; i++)
		{ 
			if (designs[i].owner == user.id){
				console.log("for" + designs[i]);
				thisDesigns["designs"].push(designs[i]);
			}
	}

	res.render('clientprofile', {"user": user, "designs": thisDesigns});
};