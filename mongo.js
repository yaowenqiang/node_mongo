var MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27001/exampledb',function(err,db){
    if(!err){
	console.log('connect to the database successfully');
	} else {
		console.log('connect to the database successfully');
	}
});

