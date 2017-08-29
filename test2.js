var mangodb = require('mongodb');
var MongoClient = mangodb.MongoClient;
var url = "mongodb://skander:7024043@ds159493.mlab.com:59493/skander";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  //CREATE  
  //db.createCollection("user", function(err, res) {
    //if (err) throw err;
    //console.log("Collection created!");
    //db.close();
  //});
  
  //db.createCollection("post", function(err, res) {
    //if (err) throw err;
    //console.log("Collection created!");
    //db.close();
  //});
  
  
  //INSERT  
  //var myobj = {
	  //"_id": mangodb.ObjectID("45b83bda421238c76f5c1969"),
	  //"name": "User One",
	  //"email": "userone@email.com",
	  //"country": "UK",
	  //"dob": new Date("1999-09-13T00:00:00.000Z")
	//};
  //db.collection("user").insertOne(myobj, function(err, res) {
    //if (err) throw err;
    //console.log(res.insertedCount + " document inserted");
    //db.close();
  //});
  
  //var myobj = {
	  //"_id": mangodb.ObjectID("17c9812acff9ac0bba018cc1"),
	  //"user_id": mangodb.ObjectID("45b83bda421238c76f5c1969"),
	  //"date": new Date("2016-09-05T03:05:00.123Z"),
	  //"text": "My life story so far",
	  //"rating": "important"
	//};
  //db.collection("post").insertOne(myobj, function(err, res) {
    //if (err) throw err;
    //console.log(res.insertedCount + " document inserted");
    //db.close();
  //});
  
 db.collection('post').aggregate([
  { "$match": { "rating": "important" } },
  { "$sort": { "date": -1 } },
  { "$limit": 20 },
  { "$lookup": {
    "localField": "user_id",
    "from": "user",
    "foreignField": "_id",
    "as": "userinfo"
  } },
  { "$unwind": "$userinfo" },
  { "$project": {
    "text": 1,
    "date": 1,
    "userinfo.name": 1,
    "userinfo.country": 1
  } }
], 
function(err, result){ 
    //some stuff
    console.log(result);
    db.close();
});
  
});


