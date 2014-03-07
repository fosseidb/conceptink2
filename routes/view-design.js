//jsonfiles
var designdata = require('../designfeed.json');
var artistdata = require('../artists.json');

exports.viewDesign = function(req, res){
	// controller code goes here
	console.log("The project name is view-design");
	var designs = designdata.designs;
	var target = req.params.designid;
	var index;

	for (var i=0; i< designs.length; i++)
		{ 
			if (designs[i].id == target)
			index = i;
	}

	var targetartistid = designs[index].artistid;
	var artists = artistdata.artists;
	var artistid;

	for (var i=0; i <artists.length; i++){
		if (artists[i].id == targetartistid)
			artistid = i;
	}
	

	// controller code goes here
	res.render('view-design', {'design' : designs[index], 'artist' : artists[artistid]})
};