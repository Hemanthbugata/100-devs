const express = require('express');
const app = express();

let requestCount = 0;

app.use(function(req, res, next) {
    requestCount++;
    console.log(`Number of requests: ${requestCount}`);
    next();
});


app.get('/user', function(req, res){
    res.status(200).json({message: "Welcome to the server"});
});

app.post('/user', function(req, res){
    res.status(200).json({message: "Welcome to the server"});
});

app.get('/requestCount', function(req, res){
    res.status(200).json({requestCount});
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});