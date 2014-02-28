//jsonfiles
var data = require('../requests.json');

exports.addRequest = function(req, res) {

	var title = req.query.title;
	var description = req.query.description;
	var imageUrl= req.query.imageUrl;
	var keywords =req.query.keywords;
	var deadline=req.query.dropdown;
	var id = data.requests.length+1;

	var nRequest = {
		'id': id,
		'title': title,
		'keywords': keywords,
		'deadline': deadline,
		'description': description,
		'imageUrl': imageUrl
	};
	console.log(nRequest);
	data["requests"].push(nRequest);
	res.render('request', nRequest);

}

exports.viewRequest = function(req, res) {
	//
	var requests = data.requests;
	var target = req.params.requestid;
	console.log(requests);
	console.log(target);
	console.log("vieRequest was run.")
	var index;

	for (var i=0; i< requests.length; i++)
	{ 
		if (requests[i].id == target)
		index = i;
	}
	console.log(index);
	console.log(requests[index]);
	res.render('request', requests[index]);
}