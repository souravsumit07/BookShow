import express from "express";
import dotenv from "dotenv"
import connectDb from './config/dbConfig.js';
import userRouter from "./routes/user.routes.js";
import movieRouter from "./routes/movie.routes.js";

dotenv.config()

const app=express()

const port = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Hello from server")
})
app.use("/api/v1/users",userRouter)
app.use("/api/v1/movies",movieRouter)


app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb()
})