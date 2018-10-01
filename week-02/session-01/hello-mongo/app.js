const MongoClient = require('mongodb').MongoClient; //object
var url = 'mongodb://localhost:27017/mydb';

MongoClient.connect(url, (err, db) => { //fat arrow function
  if(err) throw err;
  var dbo = db.db('mydb');
  var myQuery = {name: "Marie", company: "self employed"};
  dbo.collection("customers").insertOne(myQuery, (err, res) => {
    if(err) throw err;
    console.log("Collection created" +myQuery.name);
    db.close();
  });
});



/////// CREATE ENTRY/DOCUMENT
// MongoClient.connect(url, (err, db) => { //fat arrow function
//   if(err) throw err;
//   var dbo = db.db('mydb');
//   var myData = {name: "Marie Dvorzak", company: "self employed"};
//   dbo.collection("customers").insertOne(myData, (err, res) => {
//     if(err) throw err;
//     console.log("Collection created" +myData.name);
//     db.close();
//   });
// });

//// DATATABSE CONNECTION
// MongoClient.connect(url, (err, db) => { //fat arrow function
//   if(err) throw err;
//   console.log("Database Connection");
//   db.close();
// });
