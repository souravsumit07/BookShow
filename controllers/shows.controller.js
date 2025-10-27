import Show from "../models/shows.model.js";
import Theatre from "../models/theatre.model.js";

// 🟢 Add a new Show
export const addShows = async (req, res) => {
  try {
    const { movieId, theatreId, showTime, ticketPrice, totalSeats } = req.body;

    // Validate required fields
    if (!movieId || !theatreId || !showTime || !ticketPrice || !totalSeats) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Check if theatre exists
    const existingTheatre = await Theatre.findById(theatreId);
    if (!existingTheatre) {
      return res.status(404).json({ message: "Theatre not found" });
    }

    // Create new show
    const newShow = await Show.create({
      movieId,
      theatreId,
      showTime,
      ticketPrice,
      totalSeats,
    });

    // Add show ID to theatre
    existingTheatre.shows.push(newShow._id);
    await existingTheatre.save();

    res.status(201).json({
      message: "Show added successfully",
      show: newShow,
    });
  } catch (error) {
    console.error("Error adding show:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 🟡 Get Show by ID
export const getShowById = async (req, res) => {
  try {
    const show = await Show.findById(req.params.id)
      .populate("movieId", "title language genre")
      .populate("theatreId", "theatreName city");

    if (!show) {
      return res.status(404).json({ message: "No show found" });
    }

    res.status(200).json({
      message: "Show fetched successfully",
      show,
    });
  } catch (error) {
    console.error("Error fetching show:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 🔴 Delete Show
export const deleteShow = async (req, res) => {
  try {
    const show = await Show.findByIdAndDelete(req.params.id);

    if (!show) {
      return res.status(404).json({ message: "No show found" });
    }

    // Remove the show reference from the theatre
    await Theatre.findByIdAndUpdate(show.theatreId, {
      $pull: { shows: show._id },
    });

    res.status(200).json({
      message: "Show deleted successfully",
      show,
    });
  } catch (error) {
    console.error("Error deleting show:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

// 🟢 Get All Shows by Theatre ID
export const getShowsByTheatre = async (req, res) => {
  try {
    const { theatreId } = req.params;

    // Check if theatre exists
    const theatre = await Theatre.findById(theatreId);
    if (!theatre) {
      return res.status(404).json({ message: "Theatre not found" });
    }

    // Find shows for this theatre
    const shows = await Show.find({ theatreId })
      .populate("movieId", "title language genre duration posterUrl") // movie details
      .populate("theatreId", "theatreName city"); // theatre details

    if (shows.length === 0) {
      return res
        .status(404)
        .json({ message: "No shows found for this theatre" });
    }

    res.status(200).json({
      message: "Shows fetched successfully",
      total: shows.length,
      shows,
    });
  } catch (error) {
    console.error("Error fetching shows by theatre:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
