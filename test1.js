var mangodb = require('mongodb');
var MongoClient = mangodb.MongoClient;
var url = "mongodb://skander:7024043@ds159493.mlab.com:59493/skander";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  
  //CREATE  
  //db.createCollection("customers", function(err, res) {
    //if (err) throw err;
    //console.log("Collection created!");
    //db.close();
  //});
  
  // LIST COLLECTIONS
  db.listCollections().toArray(function(err, collections){
	  console.log(collections);
	   db.close();
    //collections = [{"name": "coll1"}, {"name": "coll2"}]
  });
  
  //INSERT  
  //var myobj = { name: "Company Inc", address: "Highway 37" };
  //db.collection("customers").insertOne(myobj, function(err, res) {
    //if (err) throw err;
    //console.log("1 document inserted");
    //db.close();
  //});
  
  //var myobj = { name: "ACME Inc", address: "1 University Steet" };
  //db.collection("customers").insertOne(myobj, function(err, res) {
    //if (err) throw err;
    //console.log("1 document inserted");
    //db.close();
  //});
  
  //var myobj = [
    //{ name: 'John', address: 'Highway 71'},
    //{ name: 'Peter', address: 'Lowstreet 4'},
    //{ name: 'Amy', address: 'Apple st 652'},
    //{ name: 'Hannah', address: 'Mountain 21'},
    //{ name: 'Michael', address: 'Valley 345'},
    //{ name: 'Sandy', address: 'Ocean blvd 2'},
    //{ name: 'Betty', address: 'Green Grass 1'},
    //{ name: 'Richard', address: 'Sky st 331'},
    //{ name: 'Susan', address: 'One way 98'},
    //{ name: 'Vicky', address: 'Yellow Garden 2'},
    //{ name: 'Ben', address: 'Park Lane 38'},
    //{ name: 'William', address: 'Central st 954'},
    //{ name: 'Chuck', address: 'Main Road 989'},
    //{ name: 'Viola', address: 'Sideway 1633'}
  //];
  //db.collection("customers").insertMany(myobj, function(err, res) {
    //if (err) throw err;
    //console.log("Number of documents inserted: " + res.insertedCount);
    //db.close();
  //});
  
  // FIND FIRST
  db.collection("customers").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    console.log(result.address);
    db.close();
  });
  
  //FIND ALL
  db.collection("customers").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
  db.collection("customers").find({}).limit(5).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
  //db.collection("customers").find({}, { _id: false, name: true, address: true }).toArray(function(err, result) {
  db.collection("customers").find({}, { _id: false}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
  db.collection("customers").find({}, { _id: false}).limit(3).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
  //QUERY
  var query = { address: "Highway 37" };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
  var query = { address: /^Highway/ };
  db.collection("customers").find(query).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
  
  //DELETE
  var myquery = { _id: mangodb.ObjectID('59a37df9806e5ae35d817fd9') };
  db.collection("customers").deleteOne(myquery, function(err, obj) {
    if (err) throw err;
    console.log(obj.result.n + " document(s) deleted");
    db.close();
  });
  
  //UPDATE
  var myquery = { address: "1 University Steet" };
  var newvalues = { name: "Mickey", address: "Canyon 123" };
  db.collection("customers").updateOne(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});


