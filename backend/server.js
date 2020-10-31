const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 5000;

const dbConfig = require('./config/db.config.js');
const db = {};
db.url = dbConfig.url;

const connection = new mongoose.connect(db.url, {useNewUrlParser:true, useUnifiedTopology: true }, function(err, db) {
    console.log(mongoose.connection.readyState + "   11");
});


const cors = require('cors');

app.use(cors());
app.use(express.json());

const exerciseRouter = require('./routes/exercises');
const userRouter = require('./routes/users');
app.use('/exercises', exerciseRouter);
app.use('/users', userRouter);

app.get('/user', function(req, res){
    res.send("Working");
})
var server = app.listen(port, function(){
    console.log("Priest Server running !");
});  