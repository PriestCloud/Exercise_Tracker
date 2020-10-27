const express = require('express');
const port = 3000;
const app = express();

app.get('/user', function(req, res){
    res.send("Working");
})
var server = app.listen(port, function(){
    console.log("Priest First Backend Server!")
}) 