var express = require('express');
var app = express(); 
const path = require('path');

app.get('/',function(req,res){
 res.sendFile(path.join(__dirname, 'index.html')); 
});

app.get('/piloti',function(req,res){
    res.sendFile(path.join(__dirname, 'piloti.html')); 
});

app.get('/auto',function(req,res){
    res.sendFile(path.join(__dirname, 'auto.html')); 
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
