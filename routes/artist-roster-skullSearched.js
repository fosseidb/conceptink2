var artistdata = require('../artists.json');

exports.viewArtistRosterSkull = function(req, res){
	// controller code goes here
	console.log("The project name is Artistrosterskull");
	res.render('artist-roster-skull', artistdata);
};

exports.viewArtistRosterSkullSearch = function(req, res){
	// controller code goes here
	var keyword = req.query.search;
	var keywordlst = keyword.split(" ");
	console.log('testSearched');

	var searchfilter = req.query.filter;
	var artists = artistdata.artists;
	var results = {"results":[]};

	for (var word in keywordlst) {
		console.log("word: "+word);
		for (var i=0; i< artists.length; i++)
		{ 
			if (artists[i].name == keywordlst[word]){
				results["results"].push(artists[i]);
			}
		}

	}
	console.log("finalres: "+ results);
	res.render('artist-roster-skull', results);
};