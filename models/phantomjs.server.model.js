var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var phantomjsSchema = new Schema({
    url: String,
    title:String,
    createIn: {type:Date,default:Date.now}
});

 //Expose (export) the model now...
module.exports = mongoose.model('phantomjs',phantomjsSchema);
