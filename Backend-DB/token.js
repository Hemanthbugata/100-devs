const jwt = require("jsonwebtoken");

const value = {
    name: "John",
    email: "john@example.com"
}
const token = jwt.sign(value, "secret");

console.log(token);