import mongoose from "mongoose";


const todoSchema = new mongoose.Schema({
    task:{
        type:String
    },
    description:{
        type:String
    }
},{timestamps:true})

export const Todo = mongoose.model("Todo", todoSchema)