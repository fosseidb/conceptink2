//jsonfiles
var data = require('../requests.json');

exports.addRequest = function(req, res) {

	var title = req.query.title;
	var description = req.query.description;
	var imageURL= req.query.imageURL;
	var keywords =req.query.keywords;
	var deadline=req.query.dropdown;

	var nRequest = {
		'title': title,
		'keywords': keywords,
		'deadline': deadline,
		'description': description,
		'imageURL': imageURL
	};
	res.render('request', nRequest);
	console.log(nRequest);
	data["requests"].push(nRequest);

}

exports.viewRequest = function(req, res) {
	//
	var requests = data.requests;
	var target = req.params.requestid;
	console.log(requests);
	console.log(target);

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