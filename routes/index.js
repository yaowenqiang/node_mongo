
/*
 * GET home page.
 */
var standupCtrl = require('../controllers/standup.server.controller');
var phantomsjsCtrl = require('../controllers/phantomjs.server.controller');
exports.index = function(req, res){
    //  res.render('index', { title: 'Express' });
    return phantomsjsCtrl.list(req,res);
};

exports.test = function(req, res){
        return phantomsjsCtrl.test(req,res);
};

exports.newnode = function(req,res){
    //console.dir(req.body);
    return standupCtrl.create(req,res);
 };
