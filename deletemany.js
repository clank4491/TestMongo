//delete more than one data into data base
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryEntery = {game:/^R/ }; 
	
	dbObj.collection("games").deleteMany(queryEntery, function(err, res){
		if(err) throw err;
		console.log(res.result.n + "doc deleted");
		db.close();
	});
});