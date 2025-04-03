const express = require("express");
const app = express();

app.get("/", function(req, res) {
    const kidneyId = req.query.kidneyId;
    const username = req.headers.username;
    const password = req.headers.password;

    if(username != "hemanth" || password != "java"){
        res.status(400).json({message: "Invalid credentials"
    })
    return
}
    if(kidneyId != 1 && kidneyId != 2){
        res.status(400).json({message: "Kidney not found"})
        return
    }
    res.json({message: "Health checkup successful"})
});

app.listen(3000);


for(let i = 1; i<= pro.length;i++){
    if(userName == "Hemanth" || "Karthik"){
        console.log("User is authenticated");
    }
    }





























