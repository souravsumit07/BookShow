import express from "express";
import {addShows, deleteShow, getShowById, getShowsByTheatre} from './../controllers/shows.controller.js';
import { authMiddleware } from './../middleware/authMiddleware.js';
const showsRouter=express()


showsRouter.post("/",addShows)
showsRouter.get("/:id", getShowById);
showsRouter.delete("/:id", authMiddleware, deleteShow);
showsRouter.get("/theatre/:theatreId", getShowsByTheatre);



export default showsRouter