import mongoose from 'mongoose';

const bookingSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    tripId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Trip',
        required: true
    },
    type: {
        type: String,
        required: true
    },
    flightDetails: {
        airline: String,
        flightNumber: String,
        departure: Date,
        arrival: Date,
        seat: String
    },
    hotelDetails: {
        name: String,
        address: String,
        checkIn: Date,
        checkOut: Date,
        roomType: String
    },
    carRentalDetails: {
        company: String,
        pickUp: Date,
        dropOff: Date,
        carType: String
    },
});

const Booking = mongoose.model('Booking', bookingSchema);
export default Booking;