const express = require('express');
const app = express();

const port = 3000;

const mongoose = require('mongoose');

const dbConfig = require('./config/db.config.js');
const db = {};

db.url = dbConfig.url;

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

mongoose.connect(db.url, function(err, db) {
  if (err) throw err;
  console.log("Database created!");
  db.close();
});


//(C:\Users\The priest\node_modules\mongodb\lib\mongo_client.js:219:10)
// mongoose.connect(db.url, {useNewUrlParser:true, useUnifiedTopology: true }, function(err, db) {
//     console.log("Call Me Back Baby"); 
//     if (err) throw err;
//     console.log("Database created!");
//     db.close();
//     //console.log(mongoose.connection.readyState + "   11");
// });


// const connection = mongoose.connection;

// connection.on('Connected', function () {
//     console.log("MongoDB database connection established successfully!");
//     console.log(mongoose.connection.readyState + "    12");
// });


const cors = require('cors');



app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');

app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

// app.get('/user', function(req, res){
//     res.send("Working");
// })
var server = app.listen(port, function(){
    console.log("Priest Server!");
}) 
