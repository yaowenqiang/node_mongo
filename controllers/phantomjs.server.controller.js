var Phantomjs = require('../models/phantomjs.server.model.js');
exports.test = function(){
    var phantom  = require('phantom');
    phantom.create(function(ph){
        ph.createPage(function(page){
            page.open('http://bbs.3dmgame.com/forum-1635-1.html',function(status){
                console.log('opened page ? ',status);
                page.evaluate(function(){
                var bestsellerElements = document.querySelectorAll(
                    'tbody[id^=normal] a.xst[onclick]'
                );
        if (!bestsellerElements) {
            throw new Error('No match content found!');
        }
        var bestsellerData = [];
        for (var i = 0; i < bestsellerElements.length; i ++) {
            bestsellerData.push({'title':bestsellerElements[i].innerHTML.trim(),url:bestsellerElements[i].href});
        }
        // browser context
        return bestsellerData;
                },
                 function(result){
                    for (var i = 0; i < result.length;i ++) {
                        entry = new  Phantomjs({
                            title: result[i].title,
                            url: result[i].url
                        });
                        entry.save();
                    }
                    ph.exit();
                });
            });
            });
        });

}
exports.list = function(req,res){
    var query = Phantomjs.find();
    query.exec(function(err,results){
         res.render('index',{title:'lists',list:results});
    });
};
