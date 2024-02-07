import mongoose from "mongoose"


const userSchema = new mongoose.Schema({
    email:{
        type:String
    },
    password:{
        type:String
    },
    myamount:{
        type:Number,
        default:10000
    }
}, {timeStamps:true})


export const User = mongoose.model("User", userSchema)

