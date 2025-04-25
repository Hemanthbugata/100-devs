const mongoose = require("mongoose");


mongoose.connect("mongodb+srv://admin:admin123@cluster.tsrsdua.mongodb.net/todo")
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const Todo = mongoose.model("Todo", todoSchema);

module.exports = { todoo: Todo };  