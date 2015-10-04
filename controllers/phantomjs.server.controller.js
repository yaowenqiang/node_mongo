exports.test = function(){
    var phantom  = require('phantom');
    phantom.create(function(ph){
        ph.createPage(function(page){
            page.open('http://bbs.3dmgame.com/forum-1635-1.html',function(status){
                console.log('opened page ? ',status);
                page.evaluate(function(){return document.title},
                                function(result){ 
                                    //console.log(document.querySelectorAll('html')[0].outerHTML);
                                    console.log('Page title is ' + result);
                                });
                //page.render('test.png');
                //ph.exit();
                var bestsellerList = page.evaluate(function(){
                var bestsellerElements = document.querySelectorAll(
                  //  'tbody[id^=normal] a.xst[onclick]'
                  'a'
                );
                var bestsellerData = [];
                for (var i = 0; i < bestsellerElements.length; i ++) {
                     var title = bestsellerElements[i].innerHTML.trim();
                     console.log(title);
                     bestsellerData.push(title);
                }
                return bestsellerData;
            });
            //console.dir(bestsellerList);
            /*
            for (var i = 0; i < bestsellerList.length;i ++) {
                console.log((i + 1) + ' | ' + bestsellerList[i]);
             }*/

            });
        });
    });
}