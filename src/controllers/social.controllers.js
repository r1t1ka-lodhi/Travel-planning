
import Trip from "../models/Trip.js";
import ApiError from "../Utils/api-errors.js";

export const shareTrip = async (req, res) => {
  try {
    const { tripId, socialMedia, message } = req.body;

    const trip = await Trip.findById(tripId);
    if (!trip) {
      return res.status(404).json({ error: "Trip not found" });
    }

    trip.isShared = true;
    await trip.save();

    console.log(`Sharing trip ${tripId} on ${socialMedia}: ${message}`);

    // Step 4: Return success response
    res.status(200).json({
      success: true,
      message: `Trip shared successfully on ${socialMedia}`,
      data: {
        tripId: trip._id,
        destination: trip.destination,
        sharedOn: socialMedia,
        customMessage: message
      }
    });
  } catch (error) {
    throw new ApiError(404, "Trip cannot be shared")
  }
};
