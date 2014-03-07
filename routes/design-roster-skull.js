var designdata = require('../designfeed.json');

exports.viewDesignRosterSkull = function(req, res){
	// controller code goes here
	console.log("The project name is designrosterskullfeed");
	res.render('design-roster-skull', designdata);
};

exports.viewDesignRosterSkullSearch = function(req, res){
	// controller code goes here
	var keyword = req.query.search;
	var searchfilter = req.query.filter;
	var designs = designdata.designs;
	var results = {"results":[]};

	var keywordlst = keyword.split(" ");
	console.log(keywordlst);

	
	for (var word in keywordlst) {
		console.log("word: "+word);
		for (var i=0; i< designs.length; i++)
		{ 
			console.log("test1");
			if (designs[i].title == keywordlst[word] || designs[i].searchfilter == keywordlst[word]){
				console.log("designs"+designs[i].title);
				console.log("keyword: "+ keywordlst[word]);
				console.log("test2");
				results["results"].push(designs[i]);
			}
		}	

	}
	console.log(results);
	res.render('design-roster-skullSearched', results);
};