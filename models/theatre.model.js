import mongoose from "mongoose";

const theatreSchema = new mongoose.Schema(
  {
    theatreName: {
      type: String,
      required: true,
      trim: true,
    },
    city: {
      type: String,
      required: true,
      trim: true,
    },
    address: {
      type: String,
      required: true,
    },
    totalScreens: {
      type: Number,
      required: true,
      min: 1,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User", // theatre owner user account
      required: true,
    },
    shows: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Show", // link to show collection
      },
    ],
  },
  { timestamps: true }
);

const Theatre=mongoose.model("Theatre",theatreSchema)
export default Theatre
