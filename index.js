import express from "express";
import dotenv from "dotenv"
import connectDb from './config/dbConfig.js';
import userRouter from "./routes/user.routes.js";
import movieRouter from "./routes/movie.routes.js";
import theatreRouter from "./routes/theatre.routes.js";
import showsRouter from "./routes/shows.routes.js";
import client from "prom-client"

dotenv.config()

const app=express()
app.use(express.json());

const port = process.env.PORT || 5000;

//Creating Registry for Prometheus Matics
const collectDefaultMetrics = client.collectDefaultMetrics;
const register=new client.Registry()
collectDefaultMetrics({register})


app.get("/metrics",async (req,res) => {
    res.set('Content-type',register.contentType)
    res.end(await register.metrics())
})

app.get("/",(req,res) => {
    res.send("Hello from server")
})

app.use("/api/v1/users",userRouter)
app.use("/api/v1/movies",movieRouter)
app.use("/api/v1/theatre",theatreRouter)
app.use("/api/v1/shows",showsRouter)


app.listen(port,() => {
    console.log(`Server is running on http://localhost:${port}`);
    connectDb()
})