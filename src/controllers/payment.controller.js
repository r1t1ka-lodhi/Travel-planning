import ApiError from "../Utils/api-errors.js";
import expressAsyncHandler from "express-async-handler";
import { ApiResponse } from "../Utils/api-response.js";
import Payment from "../models/Payment.js";

// Controller to process a payment
const processPayment = expressAsyncHandler(async (req, res) => {
  const { userId, amount, paymentDetails } = req.body;

  // Create a new payment entry
  const payment = await Payment.create({
    userId,
    amount,
    paymentDetails, 
    status: "Success"  // mock success for now
  });

  if (!payment) {
    throw new ApiError(400, "Payment could not be processed");
  }

  res.status(201).json(
    new ApiResponse(
      201,
      { payment },
      "Payment done successfully"
    )
  );
});

export default processPayment;
