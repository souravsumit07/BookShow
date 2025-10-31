import mongoose from "mongoose";
const bookingSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  theatre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Theatre",
    required: true,
  },
  show: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Show",
    required: true,
  },
  seats: [{ type: String, required: true }],
  totalAmount: { type: Number, required: true },
  status: { type: String, default: "CONFIRMED" },
  bookingDate: { type: Date, default: Date.now },
});

const Booking = mongoose.model("Booking", bookingSchema);
export default Booking;
