import express from 'express';
const bookingRouter = express.Router();
import { bookFlight, bookHotel } from '../controllers/booking.controller.js';
import {authenticate} from '../middlewares/auth.middlewares.js';

bookingRouter.post('/book-flight', bookFlight);
bookingRouter.post('/book-hotel', bookHotel);

export default bookingRouter;