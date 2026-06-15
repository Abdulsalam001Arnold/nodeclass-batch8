
import express from "express";
import userRoutes from "./routes/userRoutes.js"

const app = express()

app.use(express.json())
app.use("/api", userRoutes)

app.get("/", (req, res) => {
    res.send("Hello, welcome!")
})

app.listen(3000, () => {
    console.log("Server is running on port 3000")
})