const express = require('express');
const app = express();

const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const url = "mongodb://localhost:27017/movieQuotes";
const port = 3300;

app.use(bodyParser.urlencoded({extended: true}));
app.get('/', (req, res) => {
  res.sendFile(__dirname +'/www/index.html');
});
app.post('/addQuotes', (req, res) => {
  db.collection("quotes").insertOne(req.body, function(err, result){
    if(err) throw err;
    console.log("Saved");
    res.redirect('/');
  });
});

app.get('/getQuote', function(req, res){
  db.collection("quotes").find().toArray(function(err, result){
    if(err) throw err;
    res.send(result);
  });
});
MongoClient.connect(url, function(err, client){
  if(err) throw err;
  console.log("Connection to DB Successfull");
  db = client.db("movieQuotes");
});

app.listen(port, () => {
  console.log(`App listening on Port ${port}`)
})
