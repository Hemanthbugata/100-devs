const express = require("express");
const app = express();

function ticketChecker(req, res,next){
    const ticket = req.query.ticket;
    if(ticket == 1 || ticket == 2){
        console.log("Ticket is valid");
        next();
    } else{
        res.status(403).json({message: "Ticket is not valid"});
    }
}
app.use(ticketChecker);

app.get("/ride1",ticketChecker, function(req, res){
    res.send("Ride 1 is successful");
})

app.get("/ride2", function(){
    res.send("Ride 2 is successful");
})
app.get("/ride3", function(){
    res.send("Ride 3 is successful");
})

app.listen(3000);