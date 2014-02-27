//jsonfiles
var data = require('../artists.json');

exports.viewArtist = function(req, res){
	//
	var artists = data.artists;
	var target = req.params.artistid;
	var index;

	for (var i=0; i< artists.length; i++)
		{ 
			if (artists[i].id == target)
			index = i;
	}
	
	// controller code goes here
	console.log("The project name is artist"+ index);
	console.log(artists[index])
	res.render('artist', artists[index]);
};