import mongoose from "mongoose";
import express from "express";
import { todo } from "./models/todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo");

const app = express()
const port = 3000

app.get('/', async (req, res) => {
    const newTodo = new todo({title: "Hey first todo", desc: "Description of this todo", isDone:false})
    await newTodo.save()
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})