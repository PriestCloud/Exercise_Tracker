const express = require('express');
const app = express();

const mongoose = require('mongoose');
const url = 'mongodb://localhost/Exercise_Tracker_DB';
mongoose.connect(url, {useNewUrlParser:true, useUnifiedTopology: true }, function(){
    console.log("Call Me Back Baby")
});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Part 2")
})

const cors = require('cors');
require('dotenv').config();

const port = 3000;

app.use(cors());
app.use(express.json());

// app.get('/user', function(req, res){
//     res.send("Working");
// })
var server = app.listen(port, function(){
    console.log("Priest Server!")
}) 
