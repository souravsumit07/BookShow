import express from "express"
import { Login, Register } from "../controllers/user.controller.js"
import { addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movie.controller.js";
import { isadmin } from "../middleware/roleMiddleware.js";
import { authMiddleware } from './../middleware/authMiddleware.js';
const movieRouter=express()

movieRouter.post("/", authMiddleware, isadmin, addMovie);
movieRouter.put("/:id", authMiddleware, isAdmin, updateMovie);
movieRouter.delete("/:id", authMiddleware, isAdmin, deleteMovie);
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);


export default movieRouter