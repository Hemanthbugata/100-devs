const express = require("express");
const mongoose = require("mongoose");
const app = express();

app.use(express.json());

mongoose.connect("mongodb+srv://admin:admin123@cluster.tsrsdua.mongodb.net/users_data")

const User = mongoose.model('Users', { name: String, email: String, password: String});

app.post("/signup", async function(req, res){ 
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({email:username});

    if (existingUser) {
        res.status(400).json({ message: "Email already exists" });
    }
    const user = new User({
        name: name,
        email: username,
        password: password
});
user.save();
    res.status(201).json({ message: "User created successfully" });
})
app.listen(3000);