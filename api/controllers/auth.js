import User from "../models/User.js"
import bcrypt from "bcryptjs"
import {createError} from "../utils/error.js"
import jwt from "jsonwebtoken"

// register
export const register = async (req,res,next)=>{
    try {
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(req.body.password, salt)

        const newUser = new User({
            username: req.body.username,
            email: req.body.email,
            password: hash
        })

        await newUser.save()
        res.status(200).send("User has been created")
    } catch(err) {
        next(err)
    }
}

// login
export const login = async (req,res,next)=>{
    try {
        const user = await User.findOne({username: req.body.username})
        if(!user) return next(createError(404, "User not found"))

        const isPasswordCorrect = await bcrypt.compare(req.body.password, user.password)
        if(!isPasswordCorrect) return next(createError(400, "Wrong username or password"))
        
        // hash this information and for each request, send this jwt to verify user's identity
        const token = jwt.sign({id: user._id, isAdmin: user.isAdmin}, process.env.JWT) // secret key is process.env.JWT

        const { password, isAdmin, ...otherDetails } = user._doc
        res.cookie("access_token", token, {
            httpOnly: true // doesn't allow any client secret to reach this cookie (more secure)
        }).status(200).json({...otherDetails})
    } catch(err) {
        next(err)
    }
}