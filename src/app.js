import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/auth.js';
import bookingRoutes from './routes/booking.routes.js';
// import travelRoutes from './routes/travel.routes.js';  // Uncomment when travel routes are implemented
// import path from 'path';

dotenv.config();


const app = express();

app.use(cors());
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true , limit: "16Kb"}))
app.use(express.static("public"))

app.get('/login', (req, res) => {
  res.send('Welcome to the Travel Planning API login page!');
});app.get('/', (req, res) => {
  res.send('Welcome to the Travel Planning API');
});
app.get('/register', (req, res) => {
  res.send('Welcome to the Travel Planning API register page!');
});
//imports
import tripRoutes from "./routes/trip.routes.js";
import socialRoutes from "./routes/social.routes.js";
import reviewRoutes from "./routes/review.routes.js"
import paymentRoutes from "./routes/payment.routes.js"
import notificationRoutes from "./routes/notification.routes.js"

//use
app.use('/api/v1/auth', router);
app.use('/api/v1/booking', bookingRoutes);
app.use("/api/v1/trips", tripRoutes);
app.use("/api/v1/social", socialRoutes);
app.use("/api/v1/review", reviewRoutes);
app.use("/api/v1/payment", paymentRoutes);
app.use("/api/v1/notification", notificationRoutes);



app.use((err, req, res, next) => {
  console.error(err); // logs the actual error in console

  res.status(err.statusCode || 500).json({
    success: false,
    error: err.message || "Something went wrong!"
  });
});


export default app;
