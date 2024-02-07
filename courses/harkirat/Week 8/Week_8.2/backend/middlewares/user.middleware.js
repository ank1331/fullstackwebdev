import jwt from "jsonwebtoken"
import cookie from "cookie-parser"



export const usercheck =  (req, res, next)=>{
    // console.log(req.cookies.usertoken)
    const token = req.cookies.usertoken
                //   req.cookies.access_token
    
    const cookeipresent = jwt.verify(token, "test")

    if(!cookeipresent){
        res.status(200).json({
            msg:"user is not logged in"
        })
    }
    
    console.log(cookeipresent.id)

    req.user = cookeipresent.id
    next()

}