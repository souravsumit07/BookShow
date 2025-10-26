import express from "express"
import { Login, Register } from "../controllers/user.controller.js"
import { addMovie, deleteMovie, getAllMovies, getMovieById, updateMovie } from "../controllers/movie.controller.js";
const movieRouter=express()

movieRouter.post("/", addMovie);
movieRouter.get("/", getAllMovies);
movieRouter.get("/:id", getMovieById);
movieRouter.post("/:id",updateMovie);
movieRouter.delete("/:id",deleteMovie)


export default movieRouter