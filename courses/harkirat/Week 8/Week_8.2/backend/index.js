import express from "express"
import mongoose from "mongoose"
import {User} from "./model/user.model.js"
import cookie from "cookie-parser"
import jwt from "jsonwebtoken"
import { usercheck } from "./middlewares/user.middleware.js"
import cookieParser from "cookie-parser"
import { UserPayment } from "./model/payment.model.js"
import cors from "cors"
const app = express()

app.use(express.json())
app.use(cookieParser())

app.use(cors({
    origin: 'http://localhost:5173', // Replace with your frontend origin
    credentials: true,
}))
mongoose.connect("mongodb://localhost:27017/Paytm")


app.post("/createuser", async (req, res)=>{
    const {email, password} = req.body

    const user = await  User.create({
        email,
        password
    })
    

    const usertoken = jwt.sign({
        id:user._id
    }, "test")

    res.status(200).cookie("usertoken",usertoken, {
        httpOnly:true,
        
    }).json({
        "msg": "User created",
        user
    })

})


app.post("/login", async (req, res)=>{
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(!user){
        res.status(200).json({
            msg: "User does not exists"
        })
    }
    const usertoken = jwt.sign({
        id:user._id
    }, "test")

    res.status(200).cookie("usertoken",usertoken, {
        httpOnly:true,
       
    }).json({
        "msg": "User Signed in successfully",
        user,
        usertoken
    })


})


app.post("/homepage", usercheck, (req, res)=>{
    res.status(200).json({
        msg:"User hai"
    })
})


app.post("/transfer", usercheck, async (req, res)=>{
    
    const userid = req.user
    const {to, amount, from} = req.body

    const newPayment = await UserPayment.create({
        to,
        from,
        transferamount:amount
    })


    const sender = await User.findByIdAndUpdate(userid)
    sender.myamount =sender.myamount-amount
    await sender.save()

    const receiver = await User.findByIdAndUpdate(to)
    receiver.myamount =receiver.myamount+amount

    await receiver.save()

    res.status(200).json({
        newPayment
    })
    
})


app.get("/allusers",usercheck,async (req, res)=>{
    
    const user = await User.find()

    res.status(200).json({
        user
    })
})

app.get(`/user/:id`,async (req, res)=>{
    const userid =  req.params.id 

    const user = await User.findById(userid)

    res.status(200).json({
        user
    })
})


app.get("/", (req, res)=>{
    res.json("hello Welcome to home page")
})


// app.post("/makePayment", usercheck, async (req, res)=>{
//     const {to, from, transferamount} = req.body

//     const paymentamount = await UserPayment.create({
//         to:user
//     })

// })


app.listen(3000, ()=>{
    console.log("the app is listening ")
})