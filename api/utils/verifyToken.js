import jwt from "jsonwebtoken"
import { createError } from "../utils/error.js"

// takes the token from cookies to verify
export const verifyToken = (req,res,next)=>{
    const token = req.cookies.access_token
    if(!token) return next(createError(401, "You are not authenticated"))
    
    // verify token, returns an error or user information
    jwt.verify(token,process.env.JWT, (err,user)=>{
        if(err) return next(createError(403, "Token is not valid"))
        
        req.user = user
        next()
    })
}

export const verifyUser = (req,res,next)=>{
    // first verify token
    verifyToken(req,res,next, ()=>{
        // req.user.id is inside jwt token; req.params.id is what we sent for /checkuser/:id
        // if true, then user is the owner of the account or an admin
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next()
        } else{
            return next(createError(403, "You are not authorized"))
        }
    })
}

export const verifyAdmin = (req,res,next)=>{
    // first verify token
    verifyToken(req,res,next, ()=>{
        // req.user.id is inside jwt token; req.params.id is what we sent for /checkuser/:id
        // if true, then user is the owner of the account or an admin
        if(req.user.isAdmin) {
            next()
        } else{
            return next(createError(403, "You are not authorized"))
        }
    })
}