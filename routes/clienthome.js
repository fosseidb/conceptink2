//json feeds
var userdata = require('../userprofile.json');
var newsdata = require('../newsfeed.json');

exports.viewProject = function(req, res){
	// controller code goes here
	var users = userdata.users;
	var target = req.params.userid;
	console.log(users);
	console.log(target);
	console.log("vieUser was run.")
	var index;

	for (var i=0; i< users.length; i++)
	{ 
		if (users[i].id == target)
		index = i;
	}
	console.log(index);
	console.log(users[index]);
	res.render('clienthome', {'nUser' : users[index], 'newsdata' : newsdata})
}

exports.addUser = function(req, res) {
	console.log("addUSer runs");
	var name = req.query.name;
	var email = req.query.email;
	var password= req.query.password;
	var type =req.query.type;
	var id = userdata.users.length+1;

	var nUser = {
		'id': id,
		'name': name,
		'email': email,
		'password': password,
		'type': type,
		'location': "",
		'description': "",
		'profilePic':  "./images/genUser.jpg"
	};
	console.log(nUser);
	userdata["users"].push(nUser);
	res.render('clienthome', {'nUser' : nUser, 'newsdata' : newsdata})
}