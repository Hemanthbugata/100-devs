const express = require("express");
const app = express();
let numOfRequests = 0;

function calculateRequets(req,res,next){
    numOfRequests++;
    console.log(`Number of requests: ${numOfRequests}`);
    next();
}
app.use(calculateRequets);

app.post('/health-checkup', function(req,res){
    res.json({message: "Health checkup successful"});

});

app.get('/health-checkup', function(req,res){
    res.json({message: "Health checkup successful"});

});

app.listen(3000);
