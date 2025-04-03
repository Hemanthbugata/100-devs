
const express = require('express');

const app = express();

var users = [{
    name: "john",
    kidneys: [{
        healthy:false
    },{
        healthy:true
    }]
}]

app.get("/", function(req,res){
    const johnKidneys = users[0].kidneys;
    const noOfKidneys = johnKidneys.length;
    let noOfHealthyKidneys = 0;
    for (let i = 0; i < johnKidneys.length; i++) {
        if (johnKidneys[i].healthy) {
            noOfHealthyKidneys = noOfHealthyKidneys + 1;
        }
    }
    const noOfUnhealthykidneys = noOfKidneys - noOfHealthyKidneys;
    res.json({
        noOfHealthyKidneys,
        noOfUnhealthykidneys,
        johnKidneys
    })
})

app.use(express.json());

app.post("/", function(req,res){
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        message: "kidney added"
    })
})


app.put("/", function(req,res){
    for (let i = 0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = false;
    }
    res.json({
        message: "All kidneys are now unhealthy"
    })
})

app.delete("/", function(req,res){
    const newKidneys = [];
    for (let i = 0; i < users[0].kidneys.length; i++){
        if (users[0].kidneys[i].healthy) {
            newKidneys.push({
                healthy: true
            })
        }
    }
    users[0].kidneys = newKidneys;
    res.json({
        message: "All unhealthy kidneys have been removed"
    })
})
app.listen(3000);

// const express = require("express");
// const app = express();
// app.get("/", function(req,res){
//     res.json({
//         message: "Hello World"
//     })
// })
// app.listen(3000);