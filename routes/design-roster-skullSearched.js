var designdata = require('../designfeed.json');

exports.viewDesignRosterSkullSearch = function(req, res){
	// controller code goes here
	var keyword = req.query.search;
	var searchfilter = req.query.filter;
	var designs = designdata.designs;
	var results = {"results":[]};

	console.log(keyword);
	var keywordlst = keyword.split(" ");
	console.log(keywordlst);

	for (var word in keywordlst) {
		console.log("word: "+word);
		for (var i=0; i< designs.length; i++)
		{ 
			console.log("test1");
			if (designs[i].title == keywordlst[word] || designs[i].searchfilter == keywordlst[word]){
				console.log("test2");
				results["results"].push(designs[i]);
			}
		}

	}
	console.log(results);

	console.log("The project name is designrosterskullfeedsearch");
	res.render('design-roster-skullSearched', results);
};

