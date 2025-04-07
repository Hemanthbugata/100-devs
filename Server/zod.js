const express = require('express'); 
const zod = require('zod');
const app = express();

// const schema = zod.array(zod.number());

const schema = zod.object({
    email: zod.string(),
    password: zod.string(),
    country: zod.literal("IN").or(zod.literal("US")),
    kidneys:z.array(z.number())
})

app.use(express.json());

app.post("/", function(req,res){
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys)  //schema parse used for validate and use .
    if(!response.success){
        res.status(411).json({
            message: "Invalid request"
        })
    } else {
    res.send({
        response
        })
    }   
});

app.listen(3000, function() {
    console.log('Server listening on port 3000');
});