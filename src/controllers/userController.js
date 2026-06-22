
import { userModel } from "../models/userSchema.js"

export const About = (req, res) => {
    res.send("About page")
}


export const postUser = async (req, res) => {
   try{
   const {username, email, password} = req.body

   const existingUser = await userModel.findOne({email})

   if(existingUser) {
    return res.status(400).json({
        data: existingUser,
        message: "User already exists"
    })
   }
   
   const newUser = await userModel.create({
    username,
    email,
    password
   })

   return res.status(201).json({
    data: newUser,
    message: "User created successfully"
   })

   }catch(err){
    if(err instanceof Error) {
        console.error(err.message, err.name)
        throw new Error(err.message)
    }
   }
}