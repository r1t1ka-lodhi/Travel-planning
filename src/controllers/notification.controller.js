import ApiError from "../Utils/api-errors.js";
import expressAsyncHandler from "express-async-handler";
import { ApiResponse } from "../Utils/api-response.js";
import Notification from "../models/notification.js";

const processNotification = expressAsyncHandler(async(req,res) => {
    const { userId, message } = req.body;

    const notification = await Notification.create({
        userId,
        message,
        sentAt: new Date(),
        
    });
    if (!notification) {
        throw new ApiError(404, "notification not found")            
    }


    res.status(201).json( 
        new ApiResponse(
            201,
            {notification},
            "Notification sent successfully"
        )
    );
})

export default processNotification;