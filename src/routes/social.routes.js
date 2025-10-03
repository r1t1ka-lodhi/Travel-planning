import express from "express";
import { shareTrip } from "../controllers/social.controllers.js";
import { authenticate } from "../middlewares/auth.middlewares.js";

const router = express.Router();

router.post("/share", shareTrip);

export default router;
