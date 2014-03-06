//jsonfiles
var data = require('../designfeed.json');

exports.viewDesign = function(req, res){
	// controller code goes here
	console.log("The project name is view-design");
	var designs = data.designs;
	var target = req.params.designid;
	var index;

	for (var i=0; i< designs.length; i++)
		{ 
			if (designs[i].id == target)
			index = i;
	}
	
	// controller code goes here
	console.log("The project name is artist"+ index);
	console.log(designs[index])
	res.render('view-design', designs[index]);
};