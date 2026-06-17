
import express from "express";
import userRoutes from "./routes/userRoutes.js"
import mongoose from "mongoose"
import dotenv from "dotenv"
import { connectDB } from "./db/index.js";
dotenv.config()
const app = express()

connectDB(process.env.MONGODB_URI).then(() => {
    console.log("Database connected successfully")
}).catch((error) => {
    console.log(error)
})

app.use(express.json())
app.use("/api", userRoutes)

app.get("/", (req, res) => {
    res.send("Hello, welcome!")
})



app.listen(3000, () => {
    console.log("Server is running on port 3000")
})