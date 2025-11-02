import express from "express";
import {addShows, deleteShow, getShowById, getShowsByTheatre} from './../controllers/shows.controller.js';
import { authMiddleware } from './../middleware/authMiddleware.js';
import { isadmin } from './../middleware/roleMiddleware.js';
const showsRouter=express()


showsRouter.post("/",authMiddleware,isadmin,addShows)
showsRouter.delete("/:id", authMiddleware,isadmin, deleteShow);
showsRouter.get("/:id", getShowById);
showsRouter.get("/theatre/:theatreId", getShowsByTheatre);



export default showsRouter