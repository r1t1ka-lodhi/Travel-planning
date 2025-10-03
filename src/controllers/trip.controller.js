import ApiError from "../Utils/api-errors.js";
import expressAsyncHandler from "express-async-handler";
import { ApiResponse } from "../Utils/api-response.js";
import Trip from "../models/Trip.js";

// Create a new trip
export const createTrip = async (req, res) => {
  try {
    const { destination, startDate, endDate, activities, budget, notes } = req.body;

    const trip = await Trip.create({
      userId: req.userId,   // from authMiddleware
      destination,
      startDate,
      endDate,
      activities,
      budget,
      notes,
    });
    if (!trip) {
        throw new ApiError(404, "Trip not created")
    }

    res.status(201).json(
        new ApiResponse(
            201,
            {trip},
            "Trip details saved successfully"
        )
    );
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Get all trips for a user
export const getTrips = async (req, res) => {
  try {
    const trips = await Trip.find({ userId: req.userId });

    if (!trips || trips.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No trips found"
      });
    }

    res.status(200).json({
      success: true,
      message: "Trips fetched successfully",
      data: trips
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message
    });
  }
};


// Get single trip
export const getTripById = async (req, res) => {
  try {
    const trip = await Trip.findById(req.params.id);
    if (!trip) return res.status(404).json(
        new ApiResponse(
            404,
            {trip},
            "Trip details not found"
        )
    );
    res.status(200).json(
        new ApiResponse(
            201,
            {trip},
            "Trip details saved successfully"
        )

    );
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// Delete trip
export const deleteTrip = async (req, res) => {
  try {
    await Trip.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Trip deleted successfully" });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
