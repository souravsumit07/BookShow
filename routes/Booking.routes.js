import express from "express";
import { createBooking } from "../controllers/booking.controller.js";
const BookingRouter=express.Router()

BookingRouter.post("/createBooking",createBooking)

export default BookingRouter