//json feed
var data = require('../newsfeed.json');

exports.viewArticle = function(req, res){
	// controller code goes here
	var articles = data.articles;
	var target = req.params.articleid;
	var index;

	for (var i=0; i< articles.length; i++)
		{ 
			if (articles[i].id == target)
			index = i;
	}
	
	// controller code goes here
	console.log("The project name is article"+ index);
	console.log(articles[index]);
	res.render('article', articles[index]);
};