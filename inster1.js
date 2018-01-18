//inserts one data into data base
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var myDataObj = {game: "Rayman", genre: "Platformer"};
	
	dbObj.collection("games").insertOne(myDataObj,function(err, res){
		if(err) throw err;
		console.log("one game inserted")
		db.close();
		});
});