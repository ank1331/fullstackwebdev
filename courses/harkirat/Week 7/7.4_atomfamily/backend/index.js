import express from "express";
import { Todo } from "./todo.model.js";
import mongoose from "mongoose";
import cors from "cors"

const app = express()

mongoose.connect("mongodb://localhost:27017/todo")

app.use(cors({credentials: true, origin: true}))
const getTodo = async(req, res)=>{
    const todo = await Todo.find()


    const randomnum = Math.floor(Math.random()*2)
    // console.log(randomnum)
    // const finalval = todo[randomnum]

    res.status(200).json(todo)
}

app.get("/todo", getTodo)




app.listen(3000, ()=>{
    console.log("backend chalu ho gaya ")
})