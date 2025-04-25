const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todoo } = require("./db.js");  
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb+srv://admin:admin123@cluster.tsrsdua.mongodb.net/todo")
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));
  app.post("/todo", async function (req, res) {
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    try {
        const newTodo = new todoo({
            title: createPayload.title,
            description: createPayload.description,
            completed: false
        });

        await newTodo.save();  

        res.json({
            msg: "Todo created"
        });
    } catch (err) {
        console.error("Error creating todo:", err);
        res.status(500).json({
            msg: "An error occurred while creating the todo"
        });
    }
});

app.get("/todo", async function (req, res) {
    try {
        const todos = await todoo.find({});
        res.json(todos);
    } catch (err) {
        console.error("Error fetching todos:", err);
        res.status(500).json({
            msg: "An error occurred while fetching the todos"
        });
    }
}
);

app.put("/todo", async function (req, res) {
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    try {
        const todo = await todoo.findById(updatePayload.id);
        if (!todo) {
            res.status(404).json({
                msg: "Todo not found",
            });
            return;
        }

        todo.completed = !todo.completed;
        await todo.save();

        res.json({
            msg: "Todo updated"
        });
    } catch (err) {
        console.error("Error updating todo:", err);
        res.status(500).json({
            msg: "An error occurred while updating the todo"
        });
    }
});
app.delete("/todo", async function (req, res) {
    const deletePayload = req.body;
    const parsedPayload = updateTodo.safeParse(deletePayload);

    if (!parsedPayload.success) {
        res.status(411).json({
            msg: "You sent the wrong inputs",
        });
        return;
    }

    try {
        const todo = await todoo.findByIdAndDelete(deletePayload.id);
        if (!todo) {
            res.status(404).json({
                msg: "Todo not found",
            });
            return;
        }

        res.json({
            msg: "Todo deleted"
        });
    } catch (err) {
        console.error("Error deleting todo:", err);
        res.status(500).json({
            msg: "An error occurred while deleting the todo"
        });
    }
});


app.listen(3000, function () {
    console.log("Server started on port 3000");
});
