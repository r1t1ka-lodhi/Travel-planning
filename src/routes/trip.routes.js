import express from "express";
import { createTrip, getTrips, getTripById, deleteTrip } from "../controllers/trip.controller.js";
import { authenticate } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/create",  createTrip);
router.get("/get",  getTrips);
router.get("/get:id", getTripById);
router.delete("/delete:id", deleteTrip);

export default router;
