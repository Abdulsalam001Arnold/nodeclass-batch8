
import express from "express";
import userRoutes from "./routes/userRoutes.js"
import dotenv from "dotenv"
import { connectDB } from "./db/index.js";
import cookieParser from "cookie-parser";
dotenv.config()
const app = express()

connectDB(process.env.MONGODB_URI_7).then(() => {
    console.log("Database connected successfully")
}).catch((error) => {
    console.log(error)
})

app.use(express.json())
app.use(cookieParser())
app.use("/api", userRoutes)

app.get("/", (req, res) => {
    res.send("Hello, welcome!")
})



app.listen(3000, () => {
    console.log("Server is running on port http://localhost:3000")
})