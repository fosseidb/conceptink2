var models = require('../models');

exports.view = function(req, res){

    // models.Project
    // .find()
    // .sort('date')
    // .exec(renderProjects);
  res.render('index')
}

exports.addMember = function(req, res) {
  var form_data = req.body;
  console.log(form_data);

  // query to create new member
  var newMember = new models.Member({
    "name": form_data.name,
    "email": form_data.email,
    "password": form_data.password,
    "type": form_data
  })

  newMember.save(afterSaving);

  function afterSaving(err) {
    if(err) {console.log(err); res.send(500);}
    res.redirect("./clienthome"); //redirects to userhome
  }
}