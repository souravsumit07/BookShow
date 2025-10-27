import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import { addTheatre, deleteTheatre, getAllTheatres, getTheatreById } from './../controllers/theatre.controller.js';

const theatreRouter = express.Router();

// POST - Add a new theatre (by theatre owner)
theatreRouter.post("/",authMiddleware, addTheatre);
// DELETE - Delete a theatre
theatreRouter.delete("/:id",authMiddleware, deleteTheatre);

// GET - Get all theatres
theatreRouter.get("/", getAllTheatres);

// GET - Get theatre by ID
theatreRouter.get("/:id", getTheatreById);




export default theatreRouter;
