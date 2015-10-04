var Standup = require('../models/standup.server.model.js');

exports.create = function (req,res) {
    //console.dir(req.body);
    
    var entry = new Standup({
        memberName:req.body.memberName,
        project:req.body.project,
        workYesterday:req.body.workYesterday,
        workToday:req.body.workTody,
        impediment:req.body.impediment
    });
    entry.save();
    
    // redirect to home page.
    res.redirect(301,'/');
};

exports.getNote = function(req,res){
    res.render('newnote',{title:'Standup - new note'})
    
}
