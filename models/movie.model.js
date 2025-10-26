import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  poster: {
    type: String,
    required: true,
  },
  trailerLink: {
    type: String,
  },
  category: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
  },
  cast: {
    type: [String],
    default: [],
  },
  language: {
    type: [String],
    default: ["English"], 
  },
  releaseDate: {
    type: Date,
  },
}, { timestamps: true });

const Movie = mongoose.model("Movie", movieSchema);
export default Movie;
