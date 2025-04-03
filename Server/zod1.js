const zod = require("zod");
const app = require("express")();
const express = require("express");
app.use(express.json());
function validateInput(obj){
    const schema = zod.object({
        email: zod.string().email(),
        password: zod.string().min(8),
    })
    const response = schema.safeParse(obj);
    console.log(response);
}

app.post("/", function(req,res){
    const response = validateInput(req.body)
    if(!response.success){
        res.status(411).json({
            message: "Invalid request"
        })
    }
    else {
        res.send({
            response
        })
    }
}
);

app.listen(3000);