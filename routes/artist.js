//jsonfiles
var aData = require('../artists.json');
var dData = require('../designfeed.json');

exports.viewArtist = function(req, res){
	//
	var artists = aData.artists;
	var target = req.params.artistid;
	var index;
	console.log(dData);

	for (var i=0; i< artists.length; i++)
		{ 
			if (artists[i].id == target)
			index = i;
	}
	
	var designs = dData.designs;

	var thisDesigns = {"designs":[]};

	for (var i=0; i< designs.length; i++)
		{ 
			if (designs[i].artistid == target){
				console.log("for" + designs[i]);
				thisDesigns["designs"].push(designs[i]);
			}
	}

	// controller code goes here
	console.log(thisDesigns);
	res.render('artist', {"artist" : artists[index], "designs" : thisDesigns});
};