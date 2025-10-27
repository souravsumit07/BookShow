import User from "../models/user.model.js";
import Theatre from "../models/theatre.model.js";

// 🎬 Add a new theatre
export const addTheatre = async (req, res) => {
  try {
    const { theatreName, city, address, totalScreens } = req.body;

    if (!theatreName || !city || !address || !totalScreens) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const ownerId = req.user?.id;
    if (!ownerId) {
      return res.status(400).json({ message: "Owner ID missing" });
    }

    const checkOwner = await User.findById(ownerId);
    if (!checkOwner) {
      return res.status(404).json({ message: "Owner not found" });
    }

    const newTheatre = await Theatre.create({
      theatreName,
      city,
      address,
      totalScreens,
      owner: ownerId,
    });

    return res.status(201).json({
      message: "Theatre added successfully",
      theatre: newTheatre,
    });
  } catch (error) {
    console.error("Error adding theatre:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 🎭 Get all theatres
export const getAllTheatres = async (req, res) => {
  try {
    const theatres = await Theatre.find().populate("owner", "name email"); // optional: show owner info

    if (theatres.length === 0) {
      return res.status(404).json({ message: "No theatres found" });
    }

    return res.status(200).json({
      message: "Theatres fetched successfully",
      theatres,
    });
  } catch (error) {
    console.error("Error fetching theatres:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 🎟️ Get theatre by ID
export const getTheatreById = async (req, res) => {
  try {
    const theatre = await Theatre.findById(req.params.id).populate("owner", "name email");

    if (!theatre) {
      return res.status(404).json({ message: "Theatre not found" });
    }

    return res.status(200).json({
      message: "Theatre fetched successfully",
      theatre,
    });
  } catch (error) {
    console.error("Error fetching theatre:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};

// 🗑️ Delete theatre
export const deleteTheatre = async (req, res) => {
  try {
    const theatre = await Theatre.findByIdAndDelete(req.params.id);

    if (!theatre) {
      return res.status(404).json({ message: "Theatre not found" });
    }

    return res.status(200).json({
      message: "Theatre deleted successfully",
      theatre,
    });
  } catch (error) {
    console.error("Error deleting theatre:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
};
