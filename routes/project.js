exports.viewProject = function(req, res){
	// controller code goes here
	var name = req.params.name;
	console.log("The project name is project");
	res.render('project');
};