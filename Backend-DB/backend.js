const express = require("express");
const jwt = require("jsonwebtoken");
const jwtPassword = "123456";

const app = express();
app.use(express.json());

const ALL_USERS = [
    {username: "admin", password: "123456", name: "admin"},
    {username: "user", password: "abcde", name: "user"},
    {username: "hemanth", password: "java", name: "hemanth"},

];
function userExists(username, password){
    let userExists = false;
    for(let i = 0; i < ALL_USERS.length; i++){
        if(ALL_USERS[i].username == username && ALL_USERS[i].password == password){
            return true;
             }
         }
    return userExists;
} 

app.post("/signin", function(req, res){
    const username = req.body.username;
    const password = req.body.password;
    if(!userExists(username, password)){
        return res.status(403).json({message: "Invalid credentials"});
    }

    var token = jwt.sign({ username: username }, jwtPassword);
        return res.json({
            token: token,
        });
    });

app.get("/users", function (req, res) {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;

    res.json({
        users: ALL_USERS
    })
    
    });

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});