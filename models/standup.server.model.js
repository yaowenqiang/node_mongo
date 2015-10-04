var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var standupSchema = new Schema({
    memberName: String,
    project:String,
    workYesterday:String,
    workToday:String,
    impediment:String,
    createIn: {type:Date,default:Date.now}     
});

// disable _id
var noIdSchema = new Schema({
    name:String,
},{_id:false});

var includeMiddleName = true;
// example of using Schema.add ...
var exampleSchema = new Schema;
if (includeMiddleName) {
    exampleSchema.add({
        memberName:{
            first:String,
            middle:String,
            last:String
        }
    });
} else {
    exampleSchema.add({
        memberName:{
            first:String,
            last:String
        }
    });
}
// exampleSchema.add({memberName:String});
 exampleSchema.add({
    project:String,
    workYesterday:String,
    workToday:String,
    impediment:String,
    createIn: {type:Date,default:Date.now}     
});

 //Expose (export) the model now...
module.exports = mongoose.model('Standup',standupSchema);


