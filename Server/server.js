// const express = require("express");
// const app = express(); 
// const port = 3000

// app.get("/", function(req, res) {
//     res.send("Hello World")
// })

// app.get("/", function(req, res) {
//     res.json({
//         name: "hemanth",
//         age: 23
//     })
// })
// app.listen(port, function() {
//     console.log('app listening on port ${port}')
// })

const express = require("express");

function calculateSum(n){
    let sum = 0;
    for(let i=0;i<n;i++){
        sum = sum + i;
    }
    return sum;
}
const app = express();

app.get("/sum", function(req, res) {
    const n = req.query.n;
    const sum = calculateSum(5);
    res.json({sum});
})

app.listen(3000);