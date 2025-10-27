import express from "express";
import dotenv from "dotenv"
import connectDb from './config/dbConfig.js';
import userRouter from "./routes/user.routes.js";
import movieRouter from "./routes/movie.routes.js";
import theatreRouter from "./routes/theatre.routes.js";

dotenv.config()

const app=express()
app.use(express.json());

const port = process.env.PORT || 5000;

app.get("/",(req,res) => {
    res.send("Hello from server")
})
app.use("/api/v1/users",userRouter)
app.use("/api/v1/movies",movieRouter)
app.use("/api/v1/theatre",theatreRouter)


app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb()
})