const jwt = require("jsonwebtoken")
require("dotenv").config()

const authentication  = (req,res,next)=> {
    const token = req.headers?.authorization?.split(" ")[1]
    if(!token){
        res.send("Please login")
    }
    const decoded = jwt.verify(token , process.env.secret_key)
    const userId = decoded.userId
    if(decoded){
        req.body.userId = decoded.id
        next()
    }
    else{
        res.send("Please login")
    }
}

module.exports = authentication;