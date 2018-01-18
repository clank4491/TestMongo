//sort data data all data into data base
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var queryEntery = {game: "Paladins"}; 
	
	dbObj.collection("games").deleteOne(queryEntery, function(err, res){
		if(err) throw err;
		console.log("one doc deleted");
		db.close();
	});
});