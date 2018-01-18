//inserts one data into data base
var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err,db){
	if(err) throw err;
	
	var dbObj = db.db("mydb");
	var myDataObj = [{game: "Battleborn", genre: "FPS MOBA"},
	{game: "Weebu literation", genre: "Horror"},
	{game: "Tran simulator", genre: "Sim"},
	{game: "RockLeague", genre: "Sports"},	
	{game: "OverWatch", genre: "FPS"},	
	{game: "Paladins", genre: "Not OverWatch"}
	];
	
	dbObj.collection("games").insertMany(myDataObj,function(err, res){
		if(err) throw err;
		console.log("number of games inserted: " + res.insertedCount)
		db.close();
	});
});
