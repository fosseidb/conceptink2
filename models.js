
var Mongoose = require('mongoose');


var MemberSchema = new Mongoose.Schema({
  // fields are defined here
	"name": String,
	"email": String,
	"password": String,
	"type": Number,
	"rating": Number,
});

exports.Member = Mongoose.model('Member', MemberSchema);


var RequestSchema = new Mongoose.Schema({
  // fields are defined here
  	"user": String,
	"title": String,
	"keyword": String,
	"Deadline": Date,
});

exports.Request = Mongoose.model('Request', RequestSchema);


