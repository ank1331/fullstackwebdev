import mongoose from "mongoose"
import { User } from "./user.model.js"


const userPayment = new mongoose.Schema({
    to:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    from:{
        type:mongoose.Schema.Types.ObjectId,
        ref:User
    },
    transferamount:{
        type:Number
    }
},{timeStamp:true})

export const UserPayment = mongoose.model("UserPayment", userPayment)