
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
var clienthome = require('./routes/clienthome');
var clientprofile = require('./routes/clientprofile');
var newsfeed = require('./routes/newsfeed');
var article = require('./routes/article');
var makerequest = require('./routes/makerequest');
var yourrequests = require('./routes/yourrequests');
var artistroster = require('./routes/artistroster');
var artist = require('./routes/artist');
var artistRosterSkull = require('./routes/artist-roster-skull');
var designRosterSkull = require('./routes/design-roster-skull');
var template = require('./routes/template');
var request = require('./routes/request');
var response = require('./routes/response');
var signin = require('./routes/signin');
var viewDesign = require('./routes/view-design');

// Example route
// var user = require('./routes/user');

// Connect to the Mongo database, whether locally or on Heroku
// MAKE SURE TO CHANGE THE NAME FROM 'lab7' TO ... IN OTHER PROJECTS
// var local_database_name = 'conceptInkDB';
// var local_database_uri  = 'mongodb://localhost/' + local_database_name
// var database_uri = process.env.MONGOLAB_URI || local_database_uri
// mongoose.connect(database_uri);


var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('Intro HCI secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

// Add routes here
app.get('/', index.view);
app.get('/clienthome', clienthome.viewProject);
app.get('/newsfeed', newsfeed.viewFeed);
app.get('/article/:articleid', article.viewArticle);
app.get('/makerequest', makerequest.makeRequest);
app.get('/yourrequests', yourrequests.viewRequest);
app.get('/artistroster', artistroster.viewArtists);
app.get('/artist/:artistid', artist.viewArtist);
app.get('/request/:requestid', request.viewRequest);

app.get('/artist-roster-skull', artistRosterSkull.viewArtistRosterSkull);
app.get('/design-roster-skull', designRosterSkull.viewDesignRosterSkull);
app.get('/signin', signin.viewSignin);
app.get('/template', template.viewTemplate);
app.get('/response', response.viewResponse);
app.get('/view-design/:designid', viewDesign.viewDesign);
app.get('/clientprofile', clientprofile.viewCProfile)
// Example route
// app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
