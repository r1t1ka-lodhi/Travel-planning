import Booking from '../models/bookings.js';
import asyncHandler from "express-async-handler";
import ApiError from "../Utils/api-errors.js";
import { ApiResponse } from '../Utils/api-response.js';

const bookFlight = asyncHandler(async (req, res) => {
    try {
        const { userId, tripId, flightDetails } = req.body;

        const booking = await Booking.create({
            userId,
            tripId,
            type: 'Flight',
            details: flightDetails,
        });
        if (!booking) {
            throw new ApiError(404, "flight booking not found")            
        }


        res.status(201).json(
            new ApiResponse(
                201, 
                {booking},
                "User booked the flight successfullt"
            )
        );
    } catch (error) {
        throw new ApiError(error.message, 400);
    }
});

const bookHotel = asyncHandler(async (req, res) => {
    try {
        const { userId, tripId, hotelDetails } = req.body;

        const booking = await Booking.create({
            userId,
            tripId,
            type: 'Hotel',
            details: hotelDetails
        });
        if (!booking) {
            throw new ApiError(404, "hotel booking not found")            
        }

        res.status(201).json(
            new ApiResponse(
                201, 
                {booking},
                "User Booked the hotel successfully"
            )
        );
    } catch (error) {
        throw new ApiError(error.message, 400);
    }
});
export { bookFlight, bookHotel };