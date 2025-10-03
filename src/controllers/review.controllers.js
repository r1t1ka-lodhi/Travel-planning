import ApiError from "../Utils/api-errors.js";
import expressAsyncHandler from "express-async-handler";
import { ApiResponse } from "../Utils/api-response.js";
import Review from "../models/review.js"

const submitReview= expressAsyncHandler(async(req,res) => {

    const { userId, destination, rating, comment } = req.body;
    
    // Create a new review document in the database
    const review = await Review.create({
      userId,
      destination,
      rating,
      comment,
      createdAt: new Date(), 
      // Record the time when the review is submitted
    });
    if (!review) {
        throw new ApiError(404, "payment not found")
    }
    

    res.status(201).json( 
        new ApiResponse(
            201,
            {review},
            "review sent successfully"
        )
    );
})

export default submitReview;