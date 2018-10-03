const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3300;
const MONGOURL = 'mongodb://localhost:27017/addressbook';
mongoose.connect(MONGOURL, { useNewUrlParser: true }); //connect to the database
const db = mongoose.connection;
db.on('error', (error) => console.log("MongoDb error", error));

const personSchema = new mongoose.Schema({ //create a blueprint for a mongoose schema
  name: String,
  phoneNumber: String,
  place: String,
  email: String,
  age: {type: Number, required: true},
  hobbies: [String],
});
const businessSchema = new mongoose.Schema({ //create a blueprint for a mongoose schema
  name: String,
  address: String,
  city: String,
  employees: {name: String, surname: String, age: Number},
});

const Business = mongoose.model('Business', businessSchema);
const Person = mongoose.model('Person', personSchema); //create the schema

app.use(bodyParser.json());
app.get('/', (request, response) => {

  return response.json({
    'status': 'Success',
    'message': 'hiiiiiii'
  })
})

app.post('/addressbook/business', (req, res) => {
const newBusiness = new Business(req.body);
console.log("?????????????????????????? REQUEST SENT")
newBusiness.save(function(error){
  if (error) throw error;
  return res.send(`Saved ${req.body.name} to address book`);
})
});

app.get('/addressbook/business', (request, response) => {
  console.log("query parameters", request.query);
  Business.find(request.query, function(error, people){ //filters the mongodb for the parameter given
    if(error) throw error;
    return response.json(people);
  })
})






app.post('/addressbook/', (req, res) => {
const newPerson = new Person(req.body);
newPerson.save(function(error){
  if (error) throw error;
  return res.send(`Saved ${req.body.name} to address book`);
})
});

// FIND A PERSON VIA ID
app.put('/addressbook/:personId/', (request, response) => {
console.log("userId", request.params.personId);
Person.findById(request.params.personId,
  function(error, person){
  console.log('found the person', person);
  person.age = request.body.age;
  person.place = request.body.place;
  person.save();
  return response.send('this will update in a bit');
})
});


app.get('/addressbook/', (request, response) => {
  console.log("query parameters", request.query);
  Person.find(request.query, function(error, people){ //filters the mongodb for the parameter given
    if(error) throw error;
    return response.json(people);
  })
})
app.listen(PORT, () => {
  console.log(`Server listening at ${PORT}`);
})
