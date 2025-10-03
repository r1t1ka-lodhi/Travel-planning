import mongoose from "mongoose";

const notificationSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User', required: true
    },
    message: {
        type: String,
        required: true
    },
    // Add more fields as needed
});

const Notification = mongoose.model('Notification', notificationSchema);

export default Notification;