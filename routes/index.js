
/*
 * GET home page.
 */
var standupCtrl = require('../controllers/standup.server.controller');
exports.index = function(req, res){
  res.render('index', { title: 'Express' });
};


exports.newnode = function(req,res){
    //console.dir(req.body);
    return standupCtrl.create(req,res);
 };