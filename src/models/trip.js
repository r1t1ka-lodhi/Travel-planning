
import mongoose from "mongoose";

const tripSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",   // reference to User collection
    },
    destination: {
      type: String,
      required: true,
    },
    startDate: {
      type: Date,
      required: true,
    },
    endDate: {
      type: Date,
      required: true,
    },
    activities: [
      {
        type: String, // e.g., "sightseeing", "hiking"
      },
    ],
    budget: {
      type: Number,
    },
    notes: {
      type: String,
    },
    isShared: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Trip = mongoose.model("Trip", tripSchema);
export default Trip;
