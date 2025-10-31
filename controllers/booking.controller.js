import User from "../models/user.model.js";
import Show from "../models/shows.model.js";
import Theatre from "../models/theatre.model.js";
import Booking from "../models/booking.model.js";
export const createBooking = async (req, res) => {
  try {
    const { userId, showId, theatreId, seats } = req.body;
    if (!userId || !showId || !theatreId || !seats || seats.length === 0) {
      return res.status(400).json({
        success: false,
        message: "Missing required booking details",
      });
    }

    const user = await User.findById(userId);
    const show = await Show.findById(showId);
    const theatre = await Theatre.findById(theatreId);
    if (!user || !show || !theatre) {
      return res.status(404).json({
        success: false,
        message: "Invalid user, show, or theatre ID",
      });
    }

    const totalAmount = show.ticketPrice * seats.length;

    const booking = await Booking.create({
      user: userId,
      show: showId,
      theatre: theatreId,
      seats,
      totalAmount,
      status: "CONFIRMED", // or 'PENDING'
      bookingDate: new Date(),
    });

    show.bookedSeats = [...show.bookedSeats, ...seats];
    await show.save();

    return res.status(201).json({
      success: true,
      message: "Booking created successfully",
      booking,
    });
  } catch (error) {
    console.error("Error creating booking:", error);
    return res.status(500).json({
      success: false,
      message: "Server error while creating booking",
      error: error.message,
    });
  }
};
