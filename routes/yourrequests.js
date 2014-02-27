var data = require('../requests.json');
//var data2 = require('../emptyReq.json');

exports.viewRequest = function(req, res){
	// controller code goes here
  data.haverequest = true;
  res.render('yourrequests', data);
}

// exports.projectInfo = function(req, res) { 
//   var requestID = req.params.id;

//   // query for the specific project and
//   // call the following callback
//   models.Request
//     .find({"_id": requestID})
//     .exec(afterQuery);

//   function afterQuery(err, projects) {
//     if(err) console.log(err);
//     res.json(projects[0]);
//   }